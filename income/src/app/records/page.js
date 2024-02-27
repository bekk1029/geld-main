"use client";
import Navbar from "../../components/dashboardNavbar/page";
import AddRecord from "../../components/add_record/addRecord";
import RecordsSideBar from "../../components/Records/record";
import RightRecords from "../../components/Records/right/main";
import { createContext, useContext, useEffect, useState } from "react";
import { Context } from "../layout";
import AddCategory from "../../components/CustomComps/addCategory";
import { useAuth } from "../../providers/AuthProvider";
import { useRouter } from "next/navigation";

export const Context_ = createContext();

export default function Records() {
  // const { isLoggedIn } = useAuth();
  const router = useRouter();
  const { isOpenRecord, isOpenCategory } = useContext(Context);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [amountPrice, setAmountPrice] = useState("0");

  // useEffect(() => {
  //   if (!isLoggedIn) router.push("/");
  // }, [isLoggedIn]);

  // if (!isLoggedIn) return null;

  return (
    <Context_.Provider
      value={{
        search,
        setSearch,
        selectedCategory,
        amountPrice,
        setAmountPrice,
        setSelectedCategory,
        selectedType,
        setSelectedType,
      }}
    >
      <section className="w-full h-screen flex flex-col gap-[24px] relative">
        <Navbar />

        {isOpenRecord && <AddRecord></AddRecord>}
        {isOpenCategory && <AddCategory></AddCategory>}

        <section className="w-[1200px] h-screen flex flex-row gap-[24px] m-auto">
          <RecordsSideBar></RecordsSideBar>
          <RightRecords></RightRecords>
        </section>
      </section>
    </Context_.Provider>
  );
}
