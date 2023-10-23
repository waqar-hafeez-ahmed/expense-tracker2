import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const onDeleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li onClick={onDeleteHandler}>
      <Card className="flex justify-between items-center bg-[#4b4b4b] w-full my-4 py-2 px-4  font-poppin  border-[0.5px] border-gray-500 gap-10 max-sm:gap-0 cursor-pointer">
        <ExpenseDate date={props.date} />
        <div className="flex w-[80%] justify-between  items-end max-sm:flex-col flex-1 max-sm:text-right ">
          <div className=" flex flex-wrap text-2xl max-sm:text-base text-white font-baloo font-medium tracking-wide">
            {props.title}
          </div>
          <div className="text-lg max-sm:text-base py-1 px-3 max-sm:px-0 max-sm:w-[5rem] max-sm:text-center bg-secondary rounded-lg border border-white text-white font-baloo font-medium tracking-wide">
            ${props.amount}
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
