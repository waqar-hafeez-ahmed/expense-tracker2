import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

let DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 6, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 5, 12) },
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
    date: new Date(2022, 5, 12),
  },
  {
    id: "e5",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 9, 14),
  },
  { id: "e6", title: "New TV", amount: 799.49, date: new Date(2021, 8, 12) },
  {
    id: "e7",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e8",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 4, 12),
  },
];

const App = () => {
  const [formData, setFormData] = useState(DUMMY_DATA);

  const onFormSubmit = (data) => {
    setFormData((prevData) => [...prevData, data]);
  };

  const deleteItemHandler = (itemId) => {
    setFormData((prevData) => {
      const updatedData = prevData.filter((data) => data.id !== itemId);
      return updatedData;
    });
  };
  return (
    <div>
      <h1 className="text-lg text-black font-baloo font-medium px-2">
        Expense Tracker
      </h1>
      <NewExpense onFormSubmit={onFormSubmit} />
      <Expense data={formData} onDeleteItem={deleteItemHandler} />
    </div>
  );
};

export default App;
