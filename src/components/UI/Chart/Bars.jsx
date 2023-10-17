import React from "react";
const Bars = (props) => {
  let barFillHeigth = "0%";
  if (props.maxValue > 0) {
    barFillHeigth = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="flex flex-col items-center my-2 max-sm:my-0">
      <div className="flex flex-col justify-end rounded-xl bg-[#d7b4f3] overflow-hidden  border border-[#313131] w-[13px] h-24">
        <div
          className="bg-[#55385C]  w-[100%] transition-all ease-in-out duration-700"
          style={{ height: barFillHeigth }}
        ></div>
      </div>
      <div className="font-semibold text-[10px] max-sm:text-[10px] text-center mt-1">
        {props.label}
      </div>
    </div>
  );
};

export default Bars;
