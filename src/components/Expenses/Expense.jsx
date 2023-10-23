import React, { useState } from "react";
import Card from "../UI/Card";
import FilteredExpense from "../UI/FilteredExpense";
import ExpenseItem from "./ExpenseItem";
import Chart from "../UI/Chart/Chart";

const Expense = (props) => {
  const [filteredList, setFilteredList] = useState("2020");
  const onFilterExpenseHandler = (data) => {
    setFilteredList(data);
  };

  let fitleredData = props.data.filter(
    (item) => item.date.getFullYear().toString() === filteredList
  );
  fitleredData.sort((a, b) => new Date(a.date) - new Date(b.date));

  let visibleValue = fitleredData.map((item) => (
    <ExpenseItem
      id={item.id}
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
      onDelete={props.onDeleteItem}
    />
  ));

  if (fitleredData.length === 0) {
    visibleValue = (
      <div className="text-center text-3xl text-white font-medium font-roboto mt-6">
        <p>No data found</p>
      </div>
    );
  }

  return (
    <Card className="bg-[#1f1f1f]  max-w-3xl w-[95%] mx-auto my-8 p-4">
      <FilteredExpense
        selectedValue={filteredList}
        onFilteredExpense={onFilterExpenseHandler}
      />
      <Chart expenses={fitleredData} />
      <div>
        <ul>{visibleValue}</ul>
      </div>
    </Card>
  );
};

export default Expense;
