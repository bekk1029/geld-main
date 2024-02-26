"use client";
import { AddRecord } from "../../components/addCard";
import { DashboardNavbar } from "../../components/dashboardNavbar/page";
import { Food } from "../../assets/Food";
import { House } from "../../assets/House";
import { Arrow } from "../../assets/Arrow";
import { ArrowL } from "../../assets/ArrowL";
import { DownTo } from "../../assets/DownTo";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Leanding } from "../../assets/Leading";
import React, { useState } from "react";
import Slider from "@mui/joy/Slider";

export default function Records() {
  const [eye, setEye] = useState(true);
  return (
    <div className=" w-full h-screen">
      <div className="bg-white">
        <div className="max-w-[1400px] m-auto">
          <DashboardNavbar />
        </div>
      </div>
      <div className="max-w-[1400px] m-auto">
        <div className="w-full flex gap-6 px-[120px] py-4">
          <div className="w-1/3">
            <div className="max-w-[282px] w-full px-4 py-6 bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 flex">
              <div className="w-full flex-col gap-6 justify-center items-center flex">
                <div className="w-full flex-col justify-start items-start gap-6 flex">
                  <div className="text-black text-2xl font-semibold font-['Roboto'] leading-loose">
                    Records
                  </div>
                  <AddRecord />
                </div>
                <input
                  type="search"
                  className=" w-full h-8 p-4 bg-gray-100 rounded-lg border border-gray-300"
                  placeholder="Search"
                />
              </div>
              <div className="w-full flex-col gap-8 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="text-gray-800 text-base font-semibold font-['Roboto'] leading-normal">
                    Types
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                      <input
                        type="checkbox"
                        className="checkbox w-4 h-4 opacity-20 rounded-[50px] border border-gray-700 justify-center items-center flex"
                      />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        All
                      </div>
                    </div>
                    <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                      <input
                        type="checkbox"
                        className="checkbox w-4 h-4 opacity-20 rounded-[50px] border border-gray-700 justify-center items-center flex"
                      />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        Income
                      </div>
                    </div>
                    <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                      <input
                        type="checkbox"
                        className="checkbox w-4 h-4 opacity-20 rounded-[50px] border border-gray-700 justify-center items-center flex"
                      />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        Expense
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-4 flex">
                  <div className="w-full justify-between items-center flex">
                    <div className="text-gray-800 text-base font-semibold font-['Roboto'] leading-normal">
                      Category
                    </div>
                    <div className="w-[61px] px-3 rounded-[20px] justify-center items-center gap-1 flex">
                      <div className="opacity-20 text-gray-800 text-base font-normal font-['Roboto'] leading-normal cursor-pointer">
                        Clear
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="w-full justify-between items-center flex">
                      <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-5 h-5">
                          <FaEye />
                        </div>
                        <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                          Food & Drinks
                        </div>
                      </div>
                      <div className="w-5 h-5">
                        <Leanding />
                      </div>
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-5 h-5">
                          <FaEye />
                        </div>
                        <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                          Shopping
                        </div>
                      </div>
                      <div className="w-5 h-5">
                        <Leanding />
                      </div>
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                        <div
                          onClick={() => {
                            setEye(false);
                          }}
                          className="w-5 h-5 cursor-pointer"
                        >
                          {eye ? <FaEye /> : <FaEyeSlash />}
                        </div>

                        <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                          Food & Drinks
                        </div>
                      </div>
                      <div className="w-5 h-5">
                        <Leanding />
                      </div>
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-5 h-5">
                          <FaEye />
                        </div>
                        <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                          Shopping
                        </div>
                      </div>
                      <div className="w-5 h-5">
                        <Leanding />
                      </div>
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-5 h-5">
                          <FaEye />
                        </div>
                        <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                          Food & Drinks
                        </div>
                      </div>
                      <div className="w-5 h-5">
                        <Leanding />
                      </div>
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-5 h-5">
                          <FaEye />
                        </div>
                        <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                          Shopping
                        </div>
                      </div>
                      <div className="w-5 h-5">
                        <Leanding />
                      </div>
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-5 h-5">
                          <FaEye />
                        </div>
                        <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                          Food & Drinks
                        </div>
                      </div>
                      <div className="w-5 h-5">
                        <Leanding />
                      </div>
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-5 h-5">
                          <FaEye />
                        </div>
                        <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                          Shopping
                        </div>
                      </div>
                      <div className="w-5 h-5">
                        <Leanding />
                      </div>
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-5 h-5">
                          <FaEye />
                        </div>
                        <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                          Food & Drinks
                        </div>
                      </div>
                      <div className="w-5 h-5">
                        <Leanding />
                      </div>
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-5 h-5">
                          <FaEye />
                        </div>
                        <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                          Shopping
                        </div>
                      </div>
                      <div className="w-5 h-5">
                        <Leanding />
                      </div>
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-5 h-5">
                          <FaEye />
                        </div>
                        <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                          Food & Drinks
                        </div>
                      </div>
                      <div className="w-5 h-5">
                        <Leanding />
                      </div>
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="px-3 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-5 h-5">
                          <FaEye />
                        </div>
                        <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                          Shopping
                        </div>
                      </div>
                      <div className="w-5 h-5">
                        <Leanding />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="text-gray-800 text-base font-semibold font-['Roboto'] leading-normal">
                    Amount Range
                  </div>
                  <div className="flex-col justify-start items-center gap-4 flex">
                    <div className="self-stretch justify-start items-start gap-4 flex">
                      <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-center flex">
                        <div className="self-stretch h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center flex">
                          <div className="grow shrink basis-0 text-slate-900 text-base font-normal font-['Roboto'] leading-normal">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-center flex">
                        <div className="self-stretch h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center flex">
                          <div className="grow shrink basis-0 text-slate-900 text-base font-normal font-['Roboto'] leading-normal">
                            1000
                          </div>
                        </div>
                      </div>
                    </div>
                    <Slider />
                    <div className="w-[245px] justify-start items-start gap-[189px] flex">
                      <div className="flex-col justify-start items-center gap-1 flex">
                        <div className="p-1 bg-blue-600 rounded-full justify-start items-center gap-2 flex">
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                          0
                        </div>
                      </div>
                      <div className="flex-col justify-start items-center gap-1 flex">
                        <div className="p-1 bg-blue-600 rounded-full justify-start items-center gap-2 flex">
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                          1000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6 justify-start">
            <div className="flex justify-between">
              <div className="w-[188px] h-8 justify-start items-center gap-4 flex">
                <div className="w-8 h-8 bg-gray-200 rounded-lg justify-center items-center gap-1 flex">
                  <div className="w-5 h-5 relative">
                    <Arrow />
                  </div>
                </div>
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                  Last 30 Days
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-lg justify-center items-center gap-1 flex">
                  <div className="w-5 h-5 relative">
                    <ArrowL />
                  </div>
                </div>
              </div>
              <div className="w-[180px] h-12 rounded-lg flex-col justify-center items-center flex">
                <div className="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center flex">
                  <div className="grow shrink basis-0 text-gray-800 text-base font-semibold font-['Roboto'] leading-normal">
                    Newest fisrt
                  </div>
                  <div className="w-6 h-6 relative">
                    <DownTo />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <div className="w-full px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center flex">
                <div className="justify-start items-center gap-4 flex">
                  <input
                    type="checkbox"
                    className="checkbox w-6 h-6 opacity-20 rounded border border-gray-800 justify-center items-center flex"
                  />
                  <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                    Select all
                  </div>
                </div>
                <div className="justify-start items-center gap-2 flex">
                  <div className="text-slate-400 text-base font-semibold font-['Roboto'] leading-normal">
                    -
                  </div>
                  <div className="text-slate-400 text-base font-semibold font-['Roboto'] leading-normal">
                    35,500₮
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-3 flex">
                <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">
                  Today
                </div>
                <div className="w-full flex-col justify-start items-start gap-3 flex">
                  <div className="w-full px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center flex">
                    <div className="justify-start items-center gap-4 flex">
                      <input
                        type="checkbox"
                        className="checkbox w-6 h-6 opacity-20 rounded border border-gray-800 justify-center items-center flex"
                      />
                      <div className="w-10 h-10 relative">
                        <div className="w-10 h-10 left-0 top-0 absolute bg-blue-600 rounded-full" />
                        <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded">
                          <House />
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start flex">
                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                          Lending & Renting
                        </div>
                        <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                          14:00
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-center gap-2 flex">
                      <div className="text-green-500 text-base font-semibold font-['Roboto'] leading-normal">
                        -
                      </div>
                      <div className="text-green-500 text-base font-semibold font-['Roboto'] leading-normal">
                        1,000₮
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-3 flex">
                <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">
                  Yesterday
                </div>
                <div className="w-full flex-col justify-start items-start gap-3 flex">
                  <div className=" w-full px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center flex">
                    <div className="justify-start items-center gap-4 flex">
                      <input
                        type="checkbox"
                        className="checkbox w-6 h-6 opacity-20 rounded border border-gray-800 justify-center items-center flex"
                      />
                      <div className="w-10 h-10 relative">
                        <div className="w-10 h-10 left-0 top-0 absolute bg-red-500 rounded-full" />
                        <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded">
                          <Food />
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start flex">
                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                          Food & Drinks
                        </div>
                        <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                          14:00
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-center gap-2 flex">
                      <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                        -
                      </div>
                      <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                        1,000₮
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
