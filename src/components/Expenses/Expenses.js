import { useState } from "react";
import Cards from "../UI/Cards";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpense = props.items.filter(expense => {
    
    return expense.date.getFullYear().toString() === filterYear;

  })

  // let expensesContent = <p>No Expense Found</p>;

  // if (filteredExpense.length > 0) {

  //   expensesContent = filteredExpense.map((expense) => (
          
  //     <ExpenseItem
  //       id={expense.index}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  // }
  
  return (
    <div>
      <Cards className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onSelectingFilter={filterHandler}
        />
        <ExpensesChart expense={filteredExpense} />
        {/* {filteredExpense.length === 0 ? (<p color="white">No Expense Found</p>) : (filteredExpense.map((expense,index) => (
          
          <ExpenseItem
            id={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />

        )))} */}
        <ExpensesList items={filteredExpense} />
        
      
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Cards>
    </div>
  );
}

export default Expenses;
