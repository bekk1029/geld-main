import RecordsMain from "./mainRecords";
import HeaderRecords from "./recordTop";

export default function RightRecords() {
  return (
    <section className="w-full h-fit flex flex-col gap-[24px]">
      <HeaderRecords></HeaderRecords>
      <RecordsMain></RecordsMain>
    </section>
  );
}
