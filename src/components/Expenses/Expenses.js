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

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    onChangeFilter={filterChangeHandler}
                    selected={selectedYear}
                />
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
            </Card>
        </div>
    );
}

export default Expenses;