import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from '../Filter/ExpenseFilter';

function Expenses(props){
    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = (selectedYear) =>{
        //console.log('Expenses: '+ selectedYear);
        setSelectedYear(selectedYear);
    }

    const selectedYears = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });
    //내 코드
    //const selectedYears = props.items.filter((expense) => (expense.date.getFullYear() == selectedYear));

    let expensesContent = <p>No expenses found.</p>;

    if(selectedYears.length > 0){
        expensesContent = selectedYears.map((expense) => (
            <ExpenseItem 
                key = {expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
            />
        ));
    }

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    onChangeFilter={filterChangeHandler}
                    selected={selectedYear}
                />
                {expensesContent}
                    
                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/> */}
            </Card>
        </div>
    );
}

export default Expenses;