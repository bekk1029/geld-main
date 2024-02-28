import { useContext } from "react";
import { ColorData } from "./colorData";
import { iconData } from "./openIcon";
import SingleIcon from "./icon";
import { Context } from "../../app/layout";
export function IsIconsOpen(props) {
  const { setIconColor, setSelectedIcon } = useContext(Context);
  return (
    <section className="w-[312px] h-[336px] rounded-lg px-6 bg-slate-400 absolute top-20 left-0">
      <header className="w-full m-auto h-[264px] py-6 grid grid-rows-5 grid-cols-6">
        {iconData.map((data, index) => (
          <div
            className="w-full h-full flex items-center justify-center"
            key={index}
            onClick={() => {
              setSelectedIcon(data.icon);
              props.open(false);
            }}
          >
            <SingleIcon icon_={data.icon}></SingleIcon>
          </div>
        ))}
      </header>
      <hr></hr>
      <footer className="w-full h-[72px] py-6">
        <div className="flex flex-row w-full h-full items-center justify-center gap-[24px]">
          {ColorData.map((span, index) => (
            <span
              className="w-5 h-5 rounded-full"
              key={index}
              style={{ backgroundColor: `${span.color}` }}
              onClick={() => {
                setIconColor(span.color);
              }}
            ></span>
          ))}
        </div>
      </footer>
    </section>
  );
}
