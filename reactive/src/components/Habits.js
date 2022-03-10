import React, {useState} from 'react';
import HabitItems from './HabitItems';
import './Habits.css'
import HabitFilter from './HabitFilter/HabitFilter'
import HabitsChart from './HabitsChart';
import HabitsList from './HabitList'


function Habits(props) {
    const [setDate, dateSet] = useState('2020');
    
    const selectedDateHandler = dates => {
        dateSet(dates)
        console.log(dates)
    }
    const filteredDate = props.items.filter((habit) =>{
        return habit.date.getFullYear().toString() ===  setDate;
    }) 
    return (
    <div>
        
        <div className="Habits">
        <HabitsChart Habits={filteredDate} />
        <HabitFilter 
            selected={setDate}
            onDateChange={selectedDateHandler}/>
            {filteredDate.map((Habit) => (  
                <HabitItems
                    key={Habit.id}
                    title={Habit.title}
                    date={Habit.date}
                    amount={Habit.amount}
                 /> 
            ))} 
            <HabitsList items={filteredDate} />
        </div>
    </div>
    )
}

export default Habits
