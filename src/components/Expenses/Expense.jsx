import ExpenseItem from "./ExpenseItem";

const Expense = (props) => {
  return (
    <div className="bg-[#1f1f1f] max-w-3xl w-[95%] rounded-xl mx-auto my-8 p-4 shadow-[0_1px_8px_0_rgba(0,0,0,0.5)]">
      {props.data.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Expense;
