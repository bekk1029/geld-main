import { DashboardNavbar } from "../../components/dashboardNavbar/page";
import { Shape } from "../../assets/Shape";
import { Wi } from "../../assets/Wi";
import { Vector2 } from "../../assets/Vector2";
import { Name1 } from "../../assets/Name1";
import { House } from "../../assets/House";
import { Up } from "../../assets/Up";
import { Down } from "../../assets/Down";

export default function Dashboard() {
  return (
    <div className=" w-full h-screen">
      <div className="bg-white">
        <div className="max-w-[1400px] m-auto">
          <DashboardNavbar />
        </div>
      </div>
      <div className="max-w-[1400px] m-auto">
        <div className="w-full grid grid-cols-3 gap-6 px-[120px] py-4">
          <div className="w-full relative bg-blue-600 rounded-[18px] overflow-hidden">
            <div></div>
            <div className="absolute bottom-0 right-0">
              <Shape />
            </div>
            <img
              className="w-full h-full left-0 top-0 absolute opacity-30 mix-blend-overlay rounded-tl-[18px] rounded-bl-[18px]"
              src="/Noise.png"
            />
            <div className="w-10 h-10 left-[312px] top-[144px] absolute">
              <Wi />
            </div>
            <div className="left-[32px] top-[128px] absolute flex-col justify-start items-start flex">
              <div className="opacity-50 text-center text-white text-base font-normal font-['Roboto'] leading-normal">
                Cash
              </div>
              <div className="text-center text-white text-2xl font-semibold font-['Roboto'] leading-loose">
                100,000,000,000.00
              </div>
            </div>
            <div className="p-[4.70px] left-[32px] top-[32px] absolute justify-start items-center gap-[8.23px] flex">
              <Vector2 />
              <Name1 />
            </div>
          </div>
          <div className="w-full  bg-white rounded-xl flex-col justify-start items-start flex">
            <div className="self-stretch px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 flex">
              <div className="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">
                Your Income
              </div>
            </div>
            <div className="self-stretch h-40 px-6 pt-5 pb-6 flex-col justify-start items-start gap-4 flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="justify-start items-start gap-1 flex">
                  <div className="text-black text-4xl font-medium font-['Roboto'] leading-10">
                    100000.00
                  </div>
                  <div className="text-black text-4xl font-medium font-['Roboto'] leading-10">
                    ₮
                  </div>
                </div>
                <div className="text-slate-500 text-lg font-normal font-['Roboto'] leading-7">
                  Your Income Amount
                </div>
              </div>
              <div className="justify-start items-center gap-2 flex">
                <div className="w-6 h-6 relative">
                  <Up />
                </div>
                <div className="text-black text-lg font-normal font-['Roboto'] leading-7">
                  32% from last month
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  bg-white rounded-xl flex-col justify-start items-start flex">
            <div className="self-stretch px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 flex">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">
                Total Expenses
              </div>
            </div>
            <div className="self-stretch h-40 px-6 pt-5 pb-6 flex-col justify-start items-start gap-4 flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="justify-start items-start gap-1 flex">
                  <div className="text-black text-4xl font-medium font-['Roboto'] leading-10">
                    -1,200,000
                  </div>
                  <div className="text-black text-4xl font-medium font-['Roboto'] leading-10">
                    ₮
                  </div>
                </div>
                <div className="text-slate-500 text-lg font-normal font-['Roboto'] leading-7">
                  Your Income Amount
                </div>
              </div>
              <div className="justify-start items-center gap-2 flex">
                <div className="w-6 h-6 relative">
                  <Down />
                </div>
                <div className="text-black text-lg font-normal font-['Roboto'] leading-7">
                  32% from last month
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-6 px-[120px] py-4">
          <div className="w-full bg-white rounded-xl flex-col justify-start items-start flex">
            <div className="self-stretch px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 flex">
              <div className="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">
                Income - Expense
              </div>
            </div>
            <div className="self-stretch h-[226px] px-6 py-8 flex-col justify-end items-start gap-8 flex">
              <div className="justify-start items-start gap-[17px] flex">
                <div className="flex-col justify-start items-start gap-[18px] flex">
                  <div className="text-zinc-500 text-sm font-normal font-['Roboto'] leading-tight">
                    3’000’000
                  </div>
                  <div className="text-zinc-500 text-sm font-normal font-['Roboto'] leading-tight">
                    2’000’000
                  </div>
                  <div className="text-zinc-500 text-sm font-normal font-['Roboto'] leading-tight">
                    1’000’000
                  </div>
                  <div className="text-zinc-500 text-sm font-normal font-['Roboto'] leading-tight">
                    0
                  </div>
                </div>
                <div className="justify-start items-start gap-10 flex">
                  <div className="flex-col justify-start items-center gap-3 flex">
                    <div className="justify-start items-end flex">
                      <div className="w-4 h-[130px] bg-lime-500 rounded-tl-[1000px] rounded-tr-[1000px]" />
                      <div className="w-4 h-[95px] bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]" />
                    </div>
                    <div className="text-zinc-500 text-sm font-normal font-['Roboto'] leading-tight">
                      Jul
                    </div>
                  </div>
                  <div className="flex-col justify-start items-center gap-3 flex">
                    <div className="justify-start items-end flex">
                      <div className="w-4 h-[130px] bg-lime-500 rounded-tl-[1000px] rounded-tr-[1000px]" />
                      <div className="w-4 h-[95px] bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]" />
                    </div>
                    <div className="text-zinc-500 text-sm font-normal font-['Roboto'] leading-tight">
                      Jul
                    </div>
                  </div>
                  <div className="flex-col justify-start items-center gap-3 flex">
                    <div className="justify-start items-end flex">
                      <div className="w-4 h-[130px] bg-lime-500 rounded-tl-[1000px] rounded-tr-[1000px]" />
                      <div className="w-4 h-[95px] bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]" />
                    </div>
                    <div className="text-zinc-500 text-sm font-normal font-['Roboto'] leading-tight">
                      Jul
                    </div>
                  </div>
                  <div className="flex-col justify-start items-center gap-3 flex">
                    <div className="justify-start items-end flex">
                      <div className="w-4 h-[130px] bg-lime-500 rounded-tl-[1000px] rounded-tr-[1000px]" />
                      <div className="w-4 h-[95px] bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]" />
                    </div>
                    <div className="text-zinc-500 text-sm font-normal font-['Roboto'] leading-tight">
                      Jul
                    </div>
                  </div>
                  <div className="flex-col justify-start items-center gap-3 flex">
                    <div className="justify-start items-end flex">
                      <div className="w-4 h-[130px] bg-lime-500 rounded-tl-[1000px] rounded-tr-[1000px]" />
                      <div className="w-4 h-[95px] bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]" />
                    </div>
                    <div className="text-zinc-500 text-sm font-normal font-['Roboto'] leading-tight">
                      Jul
                    </div>
                  </div>
                  <div className="flex-col justify-start items-center gap-3 flex">
                    <div className="justify-start items-end flex">
                      <div className="w-4 h-[130px] bg-lime-500 rounded-tl-[1000px] rounded-tr-[1000px]" />
                      <div className="w-4 h-[95px] bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]" />
                    </div>
                    <div className="text-zinc-500 text-sm font-normal font-['Roboto'] leading-tight">
                      Jul
                    </div>
                  </div>
                  <div className="flex-col justify-start items-center gap-3 flex">
                    <div className="justify-start items-end flex">
                      <div className="w-4 h-[130px] bg-lime-500 rounded-tl-[1000px] rounded-tr-[1000px]" />
                      <div className="w-4 h-[95px] bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]" />
                    </div>
                    <div className="text-zinc-500 text-sm font-normal font-['Roboto'] leading-tight">
                      Jul
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl flex-col justify-start items-start flex">
            <div className="self-stretch px-6 py-4 border-b border-slate-200 justify-between items-center flex">
              <div className="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">
                Income - Expense
              </div>
              <div className="text-gray-500 text-base font-normal font-['Roboto'] leading-normal">
                Jun 1 - Nov 30
              </div>
            </div>
            <div className="self-stretch h-[228px] px-6 py-8 flex-col justify-start items-start gap-10 flex">
              <div className="self-stretch justify-start items-start gap-[47px] flex">
                <div className="w-[156px] h-[156px] relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="156"
                    height="156"
                    viewBox="0 0 156 156"
                    fill="none"
                  >
                    <path
                      d="M78 16C86.142 16 94.2042 17.6037 101.726 20.7195C109.249 23.8353 116.083 28.4022 121.841 34.1594C127.598 39.9166 132.165 46.7514 135.281 54.2736C138.396 61.7958 140 69.8581 140 78C140 86.142 138.396 94.2042 135.281 101.726C132.165 109.249 127.598 116.083 121.841 121.841C116.083 127.598 109.249 132.165 101.726 135.281C94.2042 138.396 86.1419 140 78 140C69.858 140 61.7958 138.396 54.2736 135.281C46.7514 132.165 39.9166 127.598 34.1594 121.841C28.4021 116.083 23.8352 109.249 20.7195 101.726C17.6037 94.2042 16 86.1419 16 78C16 69.858 17.6037 61.7958 20.7195 54.2736C23.8353 46.7514 28.4022 39.9166 34.1594 34.1594C39.9166 28.4021 46.7515 23.8352 54.2737 20.7195C61.7959 17.6037 69.8581 16 78 16L78 16Z"
                      stroke="#1C64F2"
                      stroke-width="32"
                    />
                    <path
                      d="M16 78C16 69.8581 17.6037 61.7958 20.7195 54.2736C23.8353 46.7514 28.4021 39.9166 34.1594 34.1594C39.9166 28.4021 46.7514 23.8353 54.2736 20.7195C61.7958 17.6037 69.858 16 78 16"
                      stroke="#E74694"
                      stroke-width="32"
                    />
                    <path
                      d="M47 131.694C37.5748 126.252 29.7481 118.425 24.3064 109C18.8648 99.5748 16 88.8833 16 78"
                      stroke="#FDBA8C"
                      stroke-width="32"
                    />
                    <path
                      d="M137.887 94.0468C135.426 103.233 130.884 111.729 124.614 118.879C118.344 126.029 110.512 131.641 101.726 135.281C92.9402 138.92 83.4347 140.489 73.945 139.867C64.4553 139.245 55.2359 136.449 47 131.694"
                      stroke="#16BDCA"
                      stroke-width="32"
                    />
                    <path
                      d="M131.694 47C135.765 54.0511 138.407 61.8351 139.47 69.9074C140.532 77.9797 139.995 86.1823 137.887 94.0468"
                      stroke="#F2901C"
                      stroke-width="32"
                    />
                  </svg>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch justify-start items-center flex">
                    <div className="justify-start items-center gap-2 flex">
                      <div className="w-3 h-3 bg-blue-600 rounded-full" />
                      <div className="w-[133px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                        Bills
                      </div>
                    </div>
                    <div className="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                      5’000’000₮
                    </div>
                    <div className="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                      15.50%
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center flex">
                    <div className="justify-start items-center gap-2 flex">
                      <div className="w-3 h-3 bg-pink-500 rounded-full" />
                      <div className="w-[133px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                        Food
                      </div>
                    </div>
                    <div className="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                      5’000’000₮
                    </div>
                    <div className="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                      15.50%
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center flex">
                    <div className="justify-start items-center gap-2 flex">
                      <div className="w-3 h-3 bg-orange-300 rounded-full" />
                      <div className="w-[133px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                        Shopping
                      </div>
                    </div>
                    <div className="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                      5’000’000₮
                    </div>
                    <div className="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                      15.50%
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center flex">
                    <div className="justify-start items-center gap-2 flex">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full" />
                      <div className="w-[133px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                        Insurance
                      </div>
                    </div>
                    <div className="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                      5’000’000₮
                    </div>
                    <div className="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                      15.50%
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center flex">
                    <div className="justify-start items-center gap-2 flex">
                      <div className="w-3 h-3 bg-amber-500 rounded-full" />
                      <div className="w-[133px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                        Clothing
                      </div>
                    </div>
                    <div className="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                      5’000’000₮
                    </div>
                    <div className="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">
                      15.50%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-[120px] py-4">
          <div className="w-full bg-white rounded-xl flex-col justify-start items-start flex">
            <div className="self-stretch px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 flex">
              <div className="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">
                Last Records
              </div>
            </div>
            <div className="self-stretch h-[400px] px-6 flex-col justify-start items-start flex">
              <div className="self-stretch py-5 bg-white border-b border-gray-200 justify-between items-center flex">
                <div className="justify-start items-center gap-4 flex">
                  <div className="w-10 h-10 relative">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-blue-600 rounded-full" />
                    <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded">
                      <House />
                    </div>
                  </div>
                  <div className="flex-col justify-center items-start flex">
                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                      Lending & Renting
                    </div>
                    <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                      3 hours ago
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 flex">
                  <div className="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">
                    -
                  </div>
                  <div className="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">
                    1,000₮
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
