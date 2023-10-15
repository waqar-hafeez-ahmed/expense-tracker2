import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="flex justify-between items-center bg-[#4b4b4b] w-full my-4 py-2 px-4 rounded-lg font-poppin shadow-[0_1px_8px_0_rgba(8, 121, 133, 0.5)] border-[0.5px] border-gray-500">
      <ExpenseDate date={props.date} />
      <div className="text-2xl text-white font-baloo font-medium tracking-wide">
        {props.title}
      </div>
      <div className="text-lg py-1 px-3 bg-secondary rounded-lg border border-white text-white font-baloo font-medium tracking-wide">
        ${props.amount}
      </div>
    </div>
  );
};

export default ExpenseItem;
