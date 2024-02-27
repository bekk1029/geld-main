import RecordsTop from "./topRecord";
import Types from "./types";
import CategorySideBar from "./category";
// import { Range } from "../range";

export default function RecordsSideBar() {
  return (
    <div className="w-[282px] h-fit px-[16px] py-[24px] rounded-[12px] bg-white flex flex-col gap-[24px]">
      <RecordsTop></RecordsTop>
      <Types></Types>
      <CategorySideBar></CategorySideBar>
      {/* <Range></Range> */}
    </div>
  );
}
