const ExpenseDate = (props) => {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let year = props.date.getFullYear();

  return (
    <div className="flex justify-center items-center flex-col border border-white rounded-lg w-[5.5rem] h-[5.5rem] bg-[#2a2a2a] text-white font-roboto ont-medium text-sm leading-6">
      <div>{month}</div>
      <div className="font-semibold text-xl">{day}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
