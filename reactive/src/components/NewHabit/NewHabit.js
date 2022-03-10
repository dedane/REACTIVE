import React, {useState} from 'react'
import './NewHabit.css'
import HabitForm from './HabitForm'

function NewHabit(props)  {
    const [isEditing, setIsEditing] = useState(false);
  
    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
      };
      props.onAddHabit(expenseData);
      setIsEditing(false);
    };
  
    const startEditingHandler = () => {
      setIsEditing(true);
    };
  
    const stopEditingHandler = () => {
      setIsEditing(false);
    };
  
    return (
      <div className='new-expense'>
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Habit</button>
        )}
        {isEditing && (
          <HabitForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    );
  };

export default NewHabit
