"use client";
import { useAuth } from "../../providers/AuthProvider";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { Btn } from "../../components/btn";
import { Vector } from "../../assets/Vector";
import { Navbar } from "../../components/dashboardNavbar/page";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Profile() {
  const { signOut } = useAuth();
  const [activeTab, setactiveTab] = useState(0);
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full h-screen ">
      <div className=" bg-white ">
        <div className="max-w-[1400px] m-auto">
          <Navbar />
        </div>
      </div>
      <div className="max-w-[1200px] h-[60%] w-full flex  gap-10 justify-center  items-center m-auto">
        <div className="bg-white rounded-xl px-28 py-10">
          <div className="flex flex-row justify-center items-center gap-16">
            <div className="flex grow-1">
              <img
                className="rounded-full w-[300px] h-[300px]"
                src="https://www.setup.gg/wp-content/uploads/2022/12/Twistzz-Featured-Image.png"
              ></img>
            </div>
            <div className="flex flex-col justify-end ">
              <div className="flex-col justify-center  gap-4 flex">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>

                  <input
                    type="text"
                    className="grow"
                    placeholder="Username"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>

                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </label>

                <div className="w-full relative">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <input
                      placeholder="password"
                      className="grow"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </label>
                  <div
                    onClick={togglePasswordVisibility}
                    className="ml-2 p-2 rounded-md items-center flex absolute inset-y-0 right-0"
                  >
                    {showPassword ? <FiEye /> : <FiEyeOff />}
                  </div>
                </div>
              </div>
              <div className=" mt-20 cursor-pointer bg-[#0166FF] p-2 text-white text-center rounded-lg">
                Хадгалах
              </div>
            </div>
          </div>
          <div className="flex  items-center justify-end gap-20">
            <div
              onClick={signOut}
              className=" mt-20 cursor-pointer bg-red-500 p-2 text-white rounded-lg"
            >
              Sign Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
