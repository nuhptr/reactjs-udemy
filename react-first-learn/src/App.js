import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 200.67,
      date: new Date(),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 292,
      date: new Date(),
    },
    {
      id: "e3",
      title: "Wooden Table",
      amount: 180.1,
      date: new Date(),
    },
    {
      id: "e4",
      title: "Car Insurance",
      amount: 1101.2,
      date: new Date(),
    },
  ];

  return (
    <div>
      <h2 className="title-app">Expense App!</h2>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
