import { Vector2 } from "../../assets/Vector2";
import { Name1 } from "../../assets/Name1";
import { useAuth } from "../../providers/AuthProvider";
import { Shape } from "../../assets/Shape";
import { Wi } from "../../assets/Wi";

export default function Card1() {
  // const { isReadyRecord, recordData } = useAuth();
  return (
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
          {isReadyRecord &&
            Math.abs(
              recordData
                .filter((record) => record.isExpense === false)
                .reduce((a, b) => a + Number(b.amount), 0) -
                recordData
                  .filter((record) => record.isExpense === true)
                  .reduce((a, b) => a + Number(b.amount), 0)
            )}
        </div>
      </div>
      <div className="p-[4.70px] left-[32px] top-[32px] absolute justify-start items-center gap-[8.23px] flex">
        <Vector2 />
        <Name1 />
      </div>
    </div>
  );
}
