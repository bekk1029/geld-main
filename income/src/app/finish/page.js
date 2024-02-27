"use client";
import { Layout } from "../../components/layout";
import { Check } from "../../assets/Check";
import { Bline } from "../../assets/Bline";
import { Btn } from "../../components/btn";
import Link from "next/link";

export default function Finish() {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center pt-10 bg-white gap-[100px]">
      <div className="flex-col justify-start items-center gap-12 flex">
        <Layout />
        <div className="justify-start items-center gap-4 flex">
          <div className="flex-col justify-start items-center gap-1 flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full">
                <div className="absolute left-6 top-0">
                  <Bline />
                </div>
              </div>
              <div className="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight">
                1
              </div>
            </div>
            <div className="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
              Currency
            </div>
          </div>
          <div className="w-4 self-stretch pb-6 justify-center items-center gap-2 flex"></div>
          <div className="flex-col justify-start items-center gap-1 flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full">
                <div className="absolute left-6 top-0">
                  <Bline />
                </div>
              </div>
              <div className="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight overflow-hidden">
                2
              </div>
            </div>
            <div className="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
              Balance
            </div>
          </div>
          <div className="w-4 self-stretch pb-6 justify-center items-center gap-2 flex"></div>
          <div className="flex-col justify-start items-center gap-1 flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full"></div>
              <div className="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight">
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
        <div className="max-w-[384px] flex-col justify-start items-center gap-3 flex">
          <div className="flex-col justify-start items-center gap-4 flex">
            <div className="p-2 bg-blue-600 rounded-[100px] justify-start items-center gap-2 flex">
              <div className="w-8 h-8 relative">
                <Check />
              </div>
            </div>
            <div className="text-slate-900 text-2xl font-semibold font-['Roboto'] leading-loose">
              Good Job!
            </div>
          </div>
          <div className="self-stretch text-center text-slate-600 text-base font-normal font-['Roboto'] leading-normal">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </div>
        </div>
        <Link href="/dashboard">
          <Btn value="Go to Dashboard" />
        </Link>
      </div>
    </div>
  );
}
