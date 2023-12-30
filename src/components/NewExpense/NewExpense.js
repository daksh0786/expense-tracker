import React from "react";

import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const onChangeHandler = (enteredExpemsesData) =>
    {
        const expense = {
            ...enteredExpemsesData,
            id : Math.random().toString
        };
      
        props.onAddExpense(expense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpenseData = {onChangeHandler}/>
        </div>
    )
}

export default NewExpense;