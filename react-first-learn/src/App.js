import ExpenseItem from "../src/components/ExpenseItem";

function App() {
  const expense = [
    {
      id: "e1",
      name: "Toilet Paper",
      amount: 200.67,
      date: new Date(),
    },
    {
      id: "e2",
      name: "New TV",
      amount: 292,
      date: new Date(),
    },
    {
      id: "e3",
      name: "Wooden Table",
      amount: 180.1,
      date: new Date(),
    },
    {
      id: "e4",
      name: "Car Insurance",
      amount: 1101.2,
      date: new Date(),
    },
  ];

  return (
    <div>
      <h2>Expense App!</h2>
      <ExpenseItem
        name={expense[0].name}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        name={expense[1].name}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        name={expense[2].name}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        name={expense[3].name}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </div>
  );
}

export default App;
