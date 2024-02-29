const express = require("express");
const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { connect } = require("./database");
const { Category } = require("./models/category.model");
const { Record } = require("./models/record.model");
const { User } = require("./models/user.model");

const app = express();
connect();
app.use(cors());
app.use(bodyParser.json());

app.post("/signUp", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(401).json({
        message: "user already exists",
      });
    }
    const newUser = await User.create({
      name,
      email,
      password,
    });

    return res.json({ newUser, message: "user created successfully" });
  } catch (err) {
    console.log(err);
  }
});

app.post("/signIn", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email, password: password });

    if (!user) {
      return res.status(401).json({
        message: "hereglegch alga esvel password buruu baina",
      });
    }

    const token = jwt.sign({ email }, "secret-key");
    res.json({
      token,
      message: "fine",
    });
  } catch (error) {
    res.json(error);
  }
});

app.post("/category", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "error",
    });
  }
  try {
    const verify = jwt.verify(authorization, "secret-boy");
    const { email } = verify;
    const { categoryName, IconColor, selectedIcon } = req.body;

    await Category.create({
      categoryName: categoryName,
      IconColor: IconColor,
      selectedIcon: selectedIcon,
      userEmail: email,
      Date: new Date(),
    });

    res.json({
      message: "fine",
    });
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
});

app.get("/category", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "error",
    });
  }
  try {
    const verify = jwt.verify(authorization, "secret-boy");
    const { email } = verify;
    const userCategory = await Category.find({ userEmail: email });

    res.json({
      userCategory,
    });
  } catch (err) {
    res.status(401).json({
      message: "error1",
    });
  }
});

// app.post("/records", async (req, res) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }

//   try {
//     const payload = jwt.verify(authorization, "secret-boy");
//     const { email } = payload;
//     const {
//       amount,
//       date,
//       isExpense,
//       selectedCategory,
//       time,
//       IconColor,
//       selectedIcon,
//     } = req.body;

//     await Record.create({
//       amount: amount,
//       date: new Date(date),
//       isExpense: isExpense,
//       selectedCategory: selectedCategory,
//       time: time,
//       IconColor: IconColor,
//       selectedIcon: selectedIcon,
//       userEmail: email,
//     });

//     res.json({
//       message: "Record created",
//     });
//   } catch (error) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
// });

// app.get("/records", async (req, res) => {
//   const { authorization } = req.headers;
//   const { days } = req.query;

//   if (!authorization) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }

//   try {
//     const payload = jwt.verify(authorization, "secret-boy");
//     const { email } = payload;
//     const filterDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * days);
//     console.log(days, filterDate);
//     const usersRecords = await Record.find({ userEmail: email });
//     const filterData = usersRecords.filter((record) => {
//       return record.date > filterDate;
//     });

//     res.json({
//       records: filterData,
//     });
//   } catch (error) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
// });

const port = 3005;

app.listen(port, () => {
  console.log(`Database listen on port ${port}`);
});
