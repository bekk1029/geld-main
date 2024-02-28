"use client";
import { Context } from "../../app/layout";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { Vector } from "../../assets/Vector";
const menus = ["dashboard", "records"];

export const Navbar = () => {
  const router = useRouter();
  const { isOpenRecord, setIsOpenRecord } = useContext(Context);
  const { signOut } = useAuth();
  const pathname = usePathname();
  const isProfile = pathname.includes("profile");

  return (
    <section className="flex flex-row w-full py-[16px] bg-white">
      <div className="w-[1200px] h-[40px] m-auto flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-[30px] justify-between ">
          <Vector />
          {menus.map((menu, index) => (
            <Link key={index} href={`/${menu}`}>
              <p
                className="text-center text-slate-900 text-lg font-semibold font-['Roboto'] leading-normal"
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
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  href={isProfile ? "/dashboard" : "/profile"}
                  className="justify-between"
                  onClick={() => {
                    setIsSwitch((prev) => !prev);
                  }}
                >
                  <p>{isProfile ? "Dashboard" : "Profile"}</p>
                </Link>
              </li>
              <li onClick={signOut}>
                <a>Sign Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
