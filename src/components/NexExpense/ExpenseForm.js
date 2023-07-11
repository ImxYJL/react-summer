import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    
    const titleChangeHandler = (e) =>{
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     //이렇게 전달하면 나머지 변경사항들은 버려짐 (소실)
        //     //리액트는 setState를 이용해 상태를 업데이트할 때 지정한 변경사항들을 덮어쓸 뿐 따로 병합하지는 않음
        //     ...userInput,
        //     enteredTitle: e.target.value, //오버라이드
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: e.target.value};
        // })
    };
    const amountChangeHandler = (e) =>{
        setEnteredAmount(e.target.value);
    };

    const dateChangeHandler = (e) =>{
        setEnteredDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.prevDefault();
        
        //데이터 하나로 모으기
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount, //+ : 문자열 -> 숫자로 변환
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData); //상위 컴포넌트인 NewExpense의 함수. 속성으로 전달됐으므로 사용 가능함
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type='text' 
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type='number' 
                        onChange={amountChangeHandler} 
                        value={enteredAmount}
                        min="0.01" 
                        step="0.01"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type='date' 
                        onChange={dateChangeHandler} 
                        min="2019-01-01" 
                        max="2023-12-31"
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;