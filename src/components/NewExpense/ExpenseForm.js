import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [addValue, setAddValue] = useState(false);
  // const

  const changedTitle = (event) => {
    setTitle(event.target.value);
  };
  const changedAmount = (event) => {
    setAmount(event.target.value);
  };
  const changedDate = (event) => {
    setDate(event.target.value);
  };

  const clickSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSubmitExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    setAddValue(false);
  };

  let formValue;

  const addAnotherValue = () => {
    setAddValue(true);
  };

  const cancleHandler = () => {
    setAddValue(true);
  };


  if (addValue) {
    formValue = (
      <form onSubmit={clickSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input Type="text" value={title} onChange={changedTitle}></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              Type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={changedAmount}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              Type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={date}
              onChange={changedDate}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancleHandler}>Cancle</button>
        </div>
        <div className="new-expense__actions">
          <button typr="submit">Submit</button>
        </div>
      </form>
    );
  }
  else
  {
    formValue = (
      <div className="new-expense__actions">
          <button typr="submit" onClick={addAnotherValue}>Add Another Value</button>
        </div>
    )
  }

  return <div>{ formValue }</div>
};

export default ExpenseForm;
