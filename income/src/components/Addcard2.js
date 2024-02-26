"use client";

import { useEffect, useState } from "react";
import { Plus } from "../assets/plus";

export const AddRecord2 = (props) => {
  const [color, setColor] = useState(false);

  return (
    <div>
      <div
        className="px-3 py-1 bg-blue-600 rounded-[20px] justify-center items-center gap-1 flex cursor-pointer"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <Plus />
        {/* <div class="w-5 h-5 relative text-white text-center flex justify-center items-center text-2xl"></div> */}
        <div className="text-white text-base font-normal font-['Roboto'] leading-normal">
          Record
        </div>
      </div>

      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box  max-w-3xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-5">
              ✕
            </button>
          </form>
          <div className="self-stretch px-6 py-1 bor bg-white border-b border-slate-200 justify-between items-center flex ">
            <div className="text-slate-900 text-xl font-semibold font-['Roboto'] leading-7">
              Add Record
            </div>
            {/* <div className="flex cursor-pointer">
                <ExitIcon onClick={() => {
                    props.onClose(false)
                }} />
            </div> */}
          </div>
          <div className="self-stretch justify-start items-start flex   ">
            <div className="grow shrink basis-0 px-6 pt-5 pb-6 bg-white flex-col  justify-start items-start gap-5 flex">
              <div className=" self-stretch bg-gray-100 rounded-[100px] justify-start items-start gap-1 flex">
                <div
                  onClick={() => {
                    setColor(true);
                  }}
                  className={`w-[50%] h-full flex items-center justify-center rounded-full cursor-pointer ${
                    color
                      ? "text-[#ffffff]  bg-[#0166FF]"
                      : "text-[#000000] bg-[#F3F4F6]"
                  }`}
                >
                  Expense
                </div>
                <div
                  onClick={() => {
                    setColor(false);
                  }}
                  className={`w-[50%] h-full flex items-center justify-center rounded-full cursor-pointer  ${
                    color
                      ? "text-[#000000] bg-[#F3F4F6]"
                      : "text-[#ffffff]  bg-[#16A34A]"
                  }`}
                >
                  Income
                </div>
              </div>
              <div className="self-stretch h-[340px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-[268px] flex-col justify-start items-start gap-12 flex">
                  <input
                    placeholder="₮ 000.00"
                    className="self-stretch h-[76px] px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 flex-col justify-center items-start flex"
                  ></input>
                  <div className="self-stretch h-12 rounded-lg flex-col justify-center items-start gap-1 flex">
                    <div className="h-[18px] justify-start items-center flex">
                      <div className="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">
                        Category
                      </div>
                    </div>
                    <select
                      placeholder="Find or choose category"
                      className="self-stretch h-[76px] px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 flex-col justify-center items-start flex"
                    >
                      <option disabled selected>
                        Choose
                      </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                    </select>
                  </div>
                  <div className="self-stretch justify-start items-start gap-3 flex">
                    <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-start gap-1 flex">
                      <div className="h-[18px] justify-start items-center flex">
                        <div className="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">
                          Date
                        </div>
                      </div>
                      <input
                        type="date"
                        className="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center flex"
                      ></input>
                    </div>
                    <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-start gap-1s flex">
                      <div className="h-[18px] justify-start items-center flex">
                        <div className="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">
                          Date
                        </div>
                      </div>
                      <input
                        type="time"
                        className="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center flex"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="w-full h-10 px-3 rounded-[20px]  justify-center items-center gap-1 flex">
                  <div
                    className={`w-[100%] h-full flex items-center justify-center rounded-full cursor-pointer  ${
                      color
                        ? "text-[#ffffff] bg-[#0166FF]"
                        : "text-[#ffffff]  bg-[#16A34A]"
                    }`}
                  >
                    Add Record
                  </div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 px-6 pt-11 pb-6 bg-white flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch h-[376px] flex-col justify-start items-start gap-12 flex">
                <div className="self-stretch h-12 rounded-lg flex-col justify-center items-start gap-1 flex">
                  <div className="h-[18px] justify-start items-center flex">
                    <div className="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">
                      Payee
                    </div>
                  </div>
                  <input
                    placeholder="Write here"
                    type="text"
                    className="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center flex"
                  ></input>
                </div>
                <div className="self-stretch h-[280px] rounded-lg flex-col justify-center items-start gap-1 flex">
                  <div className="h-[18px] justify-start items-center flex">
                    <div className="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">
                      Note
                    </div>
                  </div>
                  <textarea
                    placeholder="Write here"
                    className="self-stretch grow shrink basis-0 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start w-80 items-start flex"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
