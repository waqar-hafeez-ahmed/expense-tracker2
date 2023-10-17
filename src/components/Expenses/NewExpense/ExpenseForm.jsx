import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const onTitleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const onAmountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const onDateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const onCancelHandler = () => {
    props.onCancel();
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const expenses = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onNewExpense(expenses);
    props.onCancel();
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={onFormSubmitHandler} className=" mt-3 mx-4 text-left">
      <div className="flex max-sm:justify-center max-sm:text-center flex-wrap gap-5">
        <div className="flex flex-col">
          <label
            className="font-poppin text-sm font-semibold mb-2 block"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="font-poppin text-xs font-medium rounded-md py-1 px-2 border border-[#ccc] w-[20rem] max-sm:w-[17rem]"
            type="text"
            id="title"
            value={enteredTitle}
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
            className="font-poppin text-xs font-medium rounded-md py-1 px-2 border border-[#ccc] w-[20rem] max-sm:w-[17rem]"
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            value={enteredAmount}
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
            className="font-poppin text-xs font-medium rounded-md py-1 px-2 border border-[#ccc] w-80 max-sm:w-[17rem]"
            type="date"
            id="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={onDateChangeHandler}
          />
        </div>
      </div>
      <div className="text-right mt-4 max-sm:text-center">
        <button
          className="py-1 px-2 bg-primary text-white rounded-lg hover:bg-secondary border border-white"
          type="submit"
        >
          Submit
        </button>
        <button
          className="py-1 px-2 bg-primary text-white rounded-lg hover:bg-secondary border border-white ml-3"
          type="button"
          onClick={onCancelHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
