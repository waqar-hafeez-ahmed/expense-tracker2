import React, { useState } from "react";

const ExpenseForm = () => {
  const [formTitle, setFormTitle] = useState("");
  const [formAmount, setFormAmount] = useState("");
  const [formDate, setFormDate] = useState("");

  const onTitleChangeHandler = (e) => {
    setFormTitle(e.target.value);
  };
  const onAmountChangeHandler = (e) => {
    setFormAmount(e.target.value);
  };
  const onDateChangeHandler = (e) => {
    setFormDate(e.target.value);
  };

  return (
    <div className="bg-tertiary max-w-3xl w-[95%] rounded-xl mx-auto my-8 p-4 shadow-[0_1px_8px_0_rgba(0,0,0,0.5)]">
      <form className=" mt-3 mx-4 text-left">
        <div className="flex flex-wrap gap-5">
          <div className="flex flex-col">
            <label
              className="font-poppin text-sm font-semibold mb-2 block"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="font-poppin text-xs font-medium rounded-md py-1 px-2 border border-[#ccc] w-80"
              type="text"
              onChange={onTitleChangeHandler}
            />
          </div>
          <div className="flex flex-col">
            <label
              className="font-poppin text-sm font-semibold mb-2 block"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="font-poppin text-xs font-medium rounded-md py-1 px-2 border border-[#ccc] w-80"
              type="number"
              onChange={onAmountChangeHandler}
            />
          </div>
          <div className="flex flex-col">
            <label
              className="font-poppin text-sm font-semibold mb-2 block"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="font-poppin text-xs font-medium rounded-md py-1 px-2 border border-[#ccc] w-80"
              type="date"
              onChange={onDateChangeHandler}
            />
          </div>
        </div>
        <div className="text-right">
          <button
            className="py-1 px-2 bg-primary text-white rounded-lg hover:bg-secondary border border-white"
            type="submit"
          >
            Submit
          </button>
          <button
            className="py-1 px-2 bg-primary text-white rounded-lg hover:bg-secondary border border-white ml-3"
            type="submit"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
