import { useAuth } from "../../providers/AuthProvider";
import { Up } from "../../assets/Up";

export default function Card2() {
  // const { recordData, isReadyRecord } = useAuth();
  return (
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
              {isReadyRecord &&
                recordData
                  .filter((record) => record.isExpense === false)
                  .reduce((a, b) => a + Number(b.amount), 0)}
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
  );
}
