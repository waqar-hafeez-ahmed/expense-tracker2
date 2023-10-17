import React from "react";
import Bars from "./Bars";

const Chart = (props) => {
  const dataPoints = [
    { label: "Jan", value: 0 }, //Jan=>0
    { label: "Feb", value: 0 }, //Feb=>1
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  //For changing the present value of the month.
  for (const expense of props.expenses) {
    const expMonth = expense.date.getMonth();
    dataPoints[expMonth].value += expense.amount;
  }

  //For max data point.
  const dataPointValues = dataPoints.map((data) => data.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="flex justify-around bg-[#e7d1ff] rounded-lg p-3 mt-3 shadow-[0_1px_8px_0_rgba(0,0,0,0.5)]">
      {dataPoints.map((data) => (
        <Bars
          key={data.label}
          value={data.value}
          maxValue={totalMax}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
