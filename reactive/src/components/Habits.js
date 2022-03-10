import React, {useState} from 'react';
import ExpenseItems from './HabitItems';
import './Habits.css'
import ExpenseFilter from './ExpenseFilter/HabitFilter'
import HabitsChart from './HabitsChart';
import ExpensesList from './HabitList'


function Habits(props) {
    const [setDate, dateSet] = useState('2020');
    
    const selectedDateHandler = dates => {
        dateSet(dates)
        console.log(dates)
    }
    const filteredDate = props.items.filter((expense) =>{
        return expense.date.getFullYear().toString() ===  setDate;
    }) 
    return (
    <div>
        
        <div className="Habits">
        <HabitsChart Habits={filteredDate} />
        <ExpenseFilter 
            selected={setDate}
            onDateChange={selectedDateHandler}/>
            {filteredDate.map((Habit) => (  
                <ExpenseItems
                    key={Habit.id}
                    title={Habit.title}
                    date={Habit.date}
                    amount={Habit.amount}
                 /> 

            ))} 
            <ExpensesList items={filteredDate} />
        </div>
    </div>
    )
}

export default Habits
