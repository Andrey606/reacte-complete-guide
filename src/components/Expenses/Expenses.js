import React, { useState } from "react";
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

  const [year, setYear] = useState('2022')

  const changeFilterHandler = (year) => {
    setYear(year)
  }

  const filteredExpensesArray = props.expenses.filter(
    (expense) => {
      return expense.date.getFullYear().toString() === year
    }
  )

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter onChangeFilterHandler={changeFilterHandler} />
        <ExpensesChart expenses={filteredExpensesArray}/>
        <ExpenseList items={filteredExpensesArray}/>
      </Card>
    </li>
  );
}

export default Expenses;
