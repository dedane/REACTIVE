import React, {useState} from 'react'
import './App.css';
import NewHabit from './components/NewHabit/NewHabit';
import Habits from './components/Habits';
import Chart from './components/Chart/ChartBar';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Working out',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
   id: 'e2',
   title: 'Meditation', 
   amount: 79.49, 
   date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Reading Books',
    amount: 29.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 45,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Eating Healthy',
    amount: 94.12,
    date: new Date(2021, 12, 11),
  },
];

function App() {
  

  const [enteredHabit, setEnteredHabit] = useState(DUMMY_DATA)

  const addHabitHandler = Habit =>{
    setEnteredHabit((prevHabit) => {
      return [Habit, ...prevHabit]
    })
  }

  
  return (
    <div>
      <h2>Lets Get Started!!!</h2>
      <Chart />
      <NewHabit onAddHabit={addHabitHandler}/>
      <Habits 
        items={enteredHabit}
        />
    </div>
  );
}

export default App;
