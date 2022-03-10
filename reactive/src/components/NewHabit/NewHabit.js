import React, {useState} from 'react'
import './NewHabit.css'
import HabitForm from './HabitForm'

function NewHabit(props)  {
    const [isEditing, setIsEditing] = useState(false);
  
    const savehabitDataHandler = (enteredhabitData) => {
      const habitData = {
        ...enteredhabitData,
        id: Math.random().toString(),
      };
      props.onAddHabit(habitData);
      setIsEditing(false);
    };
  
    const startEditingHandler = () => {
      setIsEditing(true);
    };
  
    const stopEditingHandler = () => {
      setIsEditing(false);
    };
  
    return (
      <div className='new-habit'>
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Habit</button>
        )}
        {isEditing && (
          <HabitForm
            onSavehabitData={savehabitDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    );
  };

export default NewHabit
