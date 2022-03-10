import React from 'react'
import './HabitItems.css'
import HabitDate from './HabitDate';

function HabitItems(props) {
      
    return (
        <li>
            <div className="habit-item">
                
                <habitDate  date={props.date}/>
                <div className="habit-item__description">
                    <h2>{props.title}</h2>
                    <div className='habit-item__price'>% {props.amount}</div>
                </div>
                <button  className="habit-item__complete">update Habit</button>
            </div>         
        </li>
    )
}

export default HabitItems
