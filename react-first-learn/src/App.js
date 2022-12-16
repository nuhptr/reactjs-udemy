import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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
      <h2 className="title-app">Expense App!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
