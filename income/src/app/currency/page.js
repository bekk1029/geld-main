"use client";
import { Layout } from "../../components/layout";
import { Money } from "../../assets/Money";
import { Btn } from "../../components/btn";
import { Gline } from "../../assets/Gline";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Currency() {
  return (
    <div className="w-full h-screen flex flex-col pt-10 justify-start items-center bg-white gap-[100px]">
      <div className="flex-col justify-start items-center gap-12 flex">
        <Layout />
        <div className="justify-start items-center gap-4 flex">
          <div className="flex-col justify-start items-center gap-1 flex">
            <div className="w-6 h-6 relative ">
              <div className="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full z-0">
                <div className="absolute left-6 top-0">
                  <Gline />
                </div>
              </div>
              <div className="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight ">
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
              <div className="w-6 h-6 left-0 top-0 absolute bg-gray-200 rounded-full">
                <div className="absolute left-6 top-0">
                  <Gline />
                </div>
              </div>
              <div className="w-5 left-[2px] top-[2px] absolute text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
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
              <div className="w-6 h-6 left-0 top-0 absolute bg-gray-200 rounded-full"></div>
              <div className="w-5 left-[2px] top-[2px] absolute text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
                3
              </div>
            </div>
            <div className="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
              Finish
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[384px] flex-col justify-start items-center gap-8 flex">
        <div className="flex-col gap-3 flex">
          <div className="flex-col justify-start items-center gap-6 flex">
            <div className="flex-col justify-start items-center gap-4 flex">
              <div className="p-2 bg-blue-600 rounded-[100px] justify-start items-center gap-2 flex">
                <div className="w-8 h-8 relative">
                  <Money />
                </div>
              </div>
              <div className="text-slate-900 text-2xl font-semibold font-['Roboto'] leading-loose">
                Select base currency
              </div>
            </div>
            <div className=" w-full h-16 rounded-lg flex-col justify-center items-center flex">
              <div className="self-stretch h-16 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center flex">
                <select className="w-full grow shrink basis-0 text-gray-700 text-xl font-medium font-['Roboto'] leading-normal bg-gray-100">
                  <option>MNT - Mongolian Tugrik</option>
                  <option>USD - United States dollar</option>
                  <option>CAD - Canadian dollar</option>
                  <option>GBP - Pound sterling</option>
                  <option>TL - Turkish lira</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap self-stretch text-slate-600 text-xs font-normal font-['Roboto'] leading-none">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one{" "}
          </div>
        </div>
        <Link href="/balance">
          <Btn value="Confirm" />
        </Link>
      </div>
    </div>
  );
}
