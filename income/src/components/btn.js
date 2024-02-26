export const Btn = (props) => {
  return (
    <div className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex cursor-pointer">
      <div className="text-white text-xl font-normal font-['Roboto'] leading-7">
        {props.value}
      </div>
    </div>
  );
};
