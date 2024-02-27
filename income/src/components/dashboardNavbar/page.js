"use client";
import { Context } from "../../app/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { Vector } from "../../assets/Vector";
import Profile from "../../app/profile/page";
const menus = ["dashboard", "records"];

export const Navbar = () => {
  const { isOpenRecord, setIsOpenRecord } = useContext(Context);
  const { signOut } = useAuth();
  const pathname = usePathname();

  return (
    <section className="flex flex-row w-full py-[16px] bg-white">
      <div className="w-[1200px] h-[40px] m-auto flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-[30px] justify-between ">
          <Vector />
          {menus.map((menu, index) => (
            <Link key={index} href={`/${menu}`}>
              <p
                className="text-center text-slate-900 text-base font-normal font-['Roboto'] leading-normal"
                style={{ fontWeight: pathname.includes(menu) ? "700" : " 500" }}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex flex-row items-center justify-between gap-[12px]">
          <button
            className="bg-[#0166FF] w-[100px] rounded-[20px] text-white"
            onClick={() => {
              setIsOpenRecord(true);
            }}
          >
            + Record
          </button>
        </div>
        <Profile
          isOpenRecord={isOpenRecord}
          handleClose={() => {
            setIsOpenRecord(false);
          }}
        />
      </div>
    </section>
  );
};
