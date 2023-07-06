import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [displayForm, setDisplayForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() //임시 id를 추가함
        };
        props.onAddExpense(expenseData); //to App.js
        setDisplayForm(false);
    };

    const startEditingHandler = (e) => {
        setDisplayForm(true);
    };

    const cancelHandler = (e) => {
        setDisplayForm(false);
    };

    return(
        <div className="new-expense">
            {!displayForm && 
                (<button onClick={startEditingHandler}>Add New Expense</button>)}
                {/* 주의: () 없으면 렌더링 안됨 */}
            {displayForm && 
                (<ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler} 
                    onCancel={cancelHandler}/>) }
        </div>
    );
};

export default NewExpense;