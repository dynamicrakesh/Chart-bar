 import React from 'react';
 import  ExpensesDate from './ExpensesDate';
 import Card from './Card';
 import "./ExpenseItem.css";

function ExpenseItem(props) {
    
  
  return (
    <li>
    <Card className="expense-item">
      < ExpensesDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    
    </Card>
    </li>
  );
};

export default ExpenseItem;
