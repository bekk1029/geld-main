"use client";
import { Navbar } from "../../components/dashboardNavbar/page";
import Card1 from "../../components/geldCards/card1";
import Card2 from "../../components/geldCards/card2";
import Card3 from "../../components/geldCards/card3";
import Expense1 from "../../components/expense/expense1";
import Expense2 from "../../components/expense/expense2";
// import { useAuth } from "../../providers/AuthProvider";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
import LastRecords from "../../components/expense/lastRecords";

export default function Dashboard() {
  // const router = useRouter();
  // const { isLoggedIn } = useAuth();

  // useEffect(() => {
  //   if (!isLoggedIn) router.push("/");
  // }, [isLoggedIn]);

  // if (!isLoggedIn) return null;
  return (
    <div className=" w-full h-screen">
      <div className="bg-white">
        <div className="max-w-[1400px] m-auto">
          <Navbar />
        </div>
      </div>
      <div className="max-w-[1400px] m-auto">
        <div className="w-full grid grid-cols-3 gap-6 px-[120px] py-4">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
        <div className="w-full grid grid-cols-2 gap-6 px-[120px] py-4">
          <Expense1 />
          <Expense2 />
        </div>
        <div className="w-full px-[120px] py-4">
          <LastRecords />
        </div>
      </div>
    </div>
  );
}
