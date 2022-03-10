import React from 'react'
import './HabitFilter.css'

function HabitFilter(props) {
   
    const dateChangeHandler = (event) => {
        props.onDateChange(event.target.value)
    }
    return (
        <div className='habit-filter'>
            <div className='habit-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dateChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default HabitFilter