import react, { useState } from "react";

import "./ExpenseItem.css";
import Cards from "../UI/Cards";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  
  return (
    <li>
      <Cards className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        
      </Cards>
    </li>
  );
}

export default ExpenseItem;

// import './ExpenseItem.css';

// function ExpenseItem(props) {
//   const month = props.date.toLocaleString('en-US', { month: 'long' });
//   const day = props.date.toLocaleString('en-US', { day: '2-digit' });
//   const year = props.date.getFullYear();

//   return (
//     <div className='expense-item'>
//       <div>
//         <div>{month}</div>
//         <div>{year}</div>
//         <div>{day}</div>
//       </div>
//       <div className='expense-item__description'>
//         <h2>{props.title}</h2>
//         <div className='expense-item__price'>${props.amount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;
