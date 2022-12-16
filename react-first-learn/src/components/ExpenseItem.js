import React from "react";

import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>
        <div>{props.date.toLocaleString("en-US", { month: "long" })}</div>
        <div>{props.date.getFullYear()}</div>
        <div>{props.date.toLocaleString("en-US", { day: "2-digit" })}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
