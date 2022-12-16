import "../Expenses/Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        name={props.expenses[0].name}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        name={props.expenses[1].name}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        name={props.expenses[2].name}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        name={props.expenses[3].name}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
}
