import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const onNewExpenseData = (newData) => {
    props.onFormSubmit(newData);
  };

  const onCancelHandler = () => {
    setShowForm(false);
  };
  return (
    <div className="bg-tertiary max-w-3xl w-[95%] rounded-xl mx-auto my-8 p-4 shadow-[0_1px_8px_0_rgba(0,0,0,0.5)]">
      {!showForm && (
        <div className="mx-auto w-full text-center">
          <button
            className="py-2 px-3 bg-primary text-white rounded-lg hover:bg-secondary border border-white ml-3"
            type="button"
            onClick={() => setShowForm(true)}
          >
            Add New Expense
          </button>
        </div>
      )}
      {showForm && (
        <ExpenseForm
          onCancel={onCancelHandler}
          onNewExpense={onNewExpenseData}
        />
      )}
    </div>
  );
};

export default NewExpense;
