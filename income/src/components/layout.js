import { Vector } from "../assets/Vector";
import { Name } from "../assets/Name";
export function Layout() {
  return (
    <div className=" bg-white flex-col justify-start items-center gap-[141px] flex">
      <div className="self-stretch flex-col justify-start items-center gap-12 inline-flex">
        <div className="p-[6px] justify-start items-center gap-[11px] inline-flex">
          <Vector />
          <Name />
        </div>
      </div>
    </div>
  );
}
