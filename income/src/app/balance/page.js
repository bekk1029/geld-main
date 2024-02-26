"use client";
import { Layout } from "../../components/layout";
import { Coin } from "../../assets/Coin";
import { Btn } from "../../components/btn";
import { Bline } from "../../assets/Bline";
import { Gline } from "../../assets/Gline";
import Link from "next/link";
export default function Balance() {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center pt-10 bg-white gap-[100px]">
      <div className="flex-col justify-start items-center gap-12 flex">
        <Layout />
        <div className="justify-start items-center gap-4 inline-flex">
          <div className="flex-col justify-start items-center gap-1 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full">
                <div className="absolute left-6 top-0">
                  <Bline />
                </div>
              </div>
              <div className="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight z-10">
                1
              </div>
            </div>
            <div className="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
              Currency
            </div>
          </div>
          <div className="w-4 self-stretch pb-6 justify-center items-center gap-2 flex"></div>
          <div className="flex-col justify-start items-center gap-1 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full">
                <div className="absolute left-6 top-0">
                  <Gline />
                </div>
              </div>
              <div className="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight z-50">
                2
              </div>
            </div>
            <div className="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
              Balance
            </div>
          </div>
          <div className="w-4 self-stretch pb-6 justify-center items-center gap-2 flex"></div>
          <div className="flex-col justify-start items-center gap-1 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-gray-200 rounded-full"></div>
              <div className="w-5 left-[2px] top-[2px] absolute text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight z-10">
                3
              </div>
            </div>
            <div className="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
              Finish
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-center gap-8 flex">
        <div className="w-full flex-col gap-3 flex">
          <div className="flex-col justify-start items-center gap-6 flex">
            <div className="flex-col justify-start items-center gap-4 flex">
              <div className="p-2 bg-blue-600 rounded-[100px] justify-start items-center gap-2 inline-flex">
                <div className="w-8 h-8 relative">
                  <Coin />
                </div>
              </div>
              <div className="text-slate-900 text-2xl font-semibold font-['Roboto'] leading-loose">
                Set up your cash Balance
              </div>
            </div>
            <input
              placeholder="Email"
              className="w-full h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center flex text-black"
            />
          </div>
          <div className="self-stretch text-slate-600 text-xs font-normal font-['Roboto'] leading-none">
            How much cash do you have in your wallet?
          </div>
        </div>
        <Link href={"/Finish"}>
          <Btn value="Confirm" />
        </Link>
      </div>
    </div>
  );
}
