import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import ExpenseForm from "./components/Expenses/NewExpense/ExpenseForm";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

let DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [formData, setFormData] = useState(DUMMY_DATA);

  const onFormSubmit = (data) => {
    setFormData((prevData) => [...prevData, data]);
  };
  return (
    <div className="">
      <h1 className="text-4xl">Lets get started!</h1>
      <NewExpense onFormSubmit={onFormSubmit} />
      <Expense data={formData} />
    </div>
  );
};

export default App;
