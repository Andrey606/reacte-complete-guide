import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) { 
  const [windowState, setWindowState] = useState('closed');
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpens(expenseData)
  }

  const cancelButtonHandler = () => {
    setWindowState('closed')
    console.log(windowState)
  }

  const addButtonHandler = () => {
    setWindowState('opened')
  }

  if (windowState === 'closed') {
    return (
      <div className="new-expense">
        <button onClick={addButtonHandler}>Add new expense</button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelButtonHandler={cancelButtonHandler} />
      </div>
    );
  }
}
  
  export default NewExpense;
  