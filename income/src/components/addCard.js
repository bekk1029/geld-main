"use client";

import { useEffect, useState } from "react";

export const AddRecord = () => {
  const [color, setColor] = useState(false);
  return (
    <div>
      <div
        className="h-8 px-24 bg-blue-600  rounded-[20px] w justify-center items-center gap-1 inline-flex cursor-pointer w-60"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <div className="w-5 h-5 relative text-white text-center flex justify-center items-center text-2xl">
          +
        </div>
        <div className="text-white text-base font-normal font-['Roboto'] leading-normal">
          Add
        </div>
      </div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box  max-w-3xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-5">
              ✕
            </button>
          </form>
          <div className="self-stretch px-6 py-1 bor bg-white border-b border-slate-200 justify-between items-center inline-flex ">
            <div className="text-slate-900 text-xl font-semibold font-['Roboto'] leading-7">
              Add Record
            </div>
          </div>
          <div className="justify-start items-start inline-flex   ">
            <div className="grow shrink basis-0 px-6 pt-5 pb-6 bg-white flex-col  justify-start items-start gap-5 inline-flex">
              <div className=" self-stretch bg-gray-100 rounded-[100px] justify-start items-start gap-1 inline-flex">
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
                    type="number"
                    placeholder="₮ 000.00"
                    className="self-stretch h-[76px] px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 flex-col justify-center items-start flex"
                  ></input>
                  <div className="self-stretch h-12 rounded-lg flex-col justify-center items-center flex">
                    <div className="h-[18px] justify-start items-center inline-flex">
                      <div className="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">
                        Category
                      </div>
                    </div>
                    <select
                      placeholder="Find or choose category"
                      className="self-stretch h-[76px] px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 flex-col justify-center items-start flex"
                    >
                      <option disabled selected>
                        Who shot first?
                      </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                    </select>
                  </div>
                  <div className="self-stretch justify-start items-start gap-3 inline-flex">
                    <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-center inline-flex">
                      <div className="h-[18px] justify-start items-center inline-flex">
                        <div className="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">
                          Date
                        </div>
                      </div>
                      <input
                        type="date"
                        className="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex"
                      ></input>
                    </div>
                    <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-center inline-flex">
                      <div className="h-[18px] justify-start items-center inline-flex">
                        <div className="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">
                          Date
                        </div>
                      </div>
                      <input
                        type="time"
                        className="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-10 px-3 bg-green-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
                  <div className="text-gray-50 text-base font-normal font-['Roboto'] leading-normal">
                    Add Record
                  </div>
                </div>
              </div>
            </div>
            <div className="grow basis-0 px-6 pt-11 pb-6 bg-white flex-col justify-start items-start gap-5 flex w-full">
              <div className="w-full flex-col justify-start items-start gap-12 flex">
                <div className="w-full rounded-lg flex-col justify-start items-start flex">
                  <div className="h-[18px] justify-start items-start flex">
                    <div className="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">
                      Payee
                    </div>
                  </div>
                  <input
                    placeholder="Saruul"
                    type="text"
                    className="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex"
                  />
                </div>
                <div className="self-stretch h-[280px] rounded-lg flex-col justify-center items-center flex">
                  <div className="h-[18px] justify-start items-center inline-flex">
                    <div className="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">
                      Note
                    </div>
                  </div>
                  <textarea
                    placeholder="Write here"
                    className="self-stretch grow shrink basis-0 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start w-80 items-start inline-flex"
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
