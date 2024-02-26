import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://Saruul:Pi12739@cluster0.xdbi0wh.mongodb.net/geld",{
            useNewUrlParser: true,
            useUnifiedTopology: true
            });
        console.log("DataBase connected");
    } catch (error) {
        console.log("Database connected failed")
    }
}

module.exports = {
    connect,
};