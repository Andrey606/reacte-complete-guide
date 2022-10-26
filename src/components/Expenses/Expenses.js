import React from "react";
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

function Expenses(props) {
  const expensesArray = props.expenses.map((expense) =>
    <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      date={expense.date} 
      amount={expense.amount}
    ></ExpenseItem>
  );

  return (
    <Card className="expenses">
      {expensesArray}
    </Card>
  );
}

export default Expenses;
