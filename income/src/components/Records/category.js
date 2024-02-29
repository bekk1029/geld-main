import { Context } from "../../app/layout";
import Image from "next/image";
import { useContext } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { Context_ } from "../../app/records/page";
export default function CategorySideBar() {
  const { setIsOpenCategory } = useContext(Context);
  const { setSelectedCategory } = useContext(Context_);
  const { categoryData, isReadyCategory } = useAuth();
  return (
    <div className="flex flex-col">
      <footer className="flex flex-row w-full h-fit justify-between">
        <h1 className="text-[16px] font-[600] text-black">Category</h1>
        <p
          className="font-[400] text-[#1F2937]"
          onClick={() => {
            setSelectedCategory("");
          }}
        >
          Clear
        </p>
      </footer>
      <main className="w-full h-fit flex flex-col">
        {isReadyCategory &&
          categoryData.map((category, index) => (
            <span
              key={index}
              className="h-fit w-full flex items-center gap-[8px]"
              onClick={() => {
                setSelectedCategory(category.categoryName);
              }}
            >
              <img src="/view.svg" className="w-5 h-5"></img>
              {category.categoryName}
            </span>
          ))}
        <div className="flex flex-row gap-[8px] justify-start items-center cursor-pointer">
          <p width={50}>+</p>
          <p
            onClick={() => {
              setIsOpenCategory(true);
            }}
          >
            Add Category
          </p>
        </div>
      </main>
    </div>
  );
}
