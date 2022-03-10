import React from 'react';

import HabitItem from './HabitItems';
import './HabitList.css';

const HabitList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='Habit-list__fallback'>Found no Habits.</h2>;
  }

  return (
    <ul className='Habit-list'>
      {props.items.map((Habit) => (
        <HabitItem
          key={Habit.id}
          title={Habit.title}
          amount={Habit.amount}
          date={Habit.date}
        />
      ))}
    </ul>
  );
};

export default HabitList;