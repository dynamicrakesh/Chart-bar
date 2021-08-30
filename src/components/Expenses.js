import React, {useState} from 'react';

import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
import Card from './Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredyear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
 return expense.date.getFullYear().toString() === filteredyear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredyear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses = {filteredExpenses} />
      <ExpensesList items = {filteredExpenses} />
    </Card>
  );
}

export default Expenses;