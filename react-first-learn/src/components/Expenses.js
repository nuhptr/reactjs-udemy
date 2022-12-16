import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  return (
    <div className="expenses">
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
    </div>
  );
}
