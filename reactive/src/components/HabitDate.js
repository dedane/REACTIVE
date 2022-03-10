import React from 'react'
import './HabitDate.css'

function HabitDate(props) {
    const month = props.date.toLocaleString('en-us',{month: 'long'});
    const day = props.date.toLocaleString('en-us',{day: '2-digit'});
    const year = props.date.getFullYear(); 
    return (
        <div className="habit-date">
            <div className="habit-date__month">{ month }</div>
            <div className="habit-date__year">{ year }</div>
            <div className="habit-date__day">{ day }</div>
        </div>
    )
}

export default HabitDate
