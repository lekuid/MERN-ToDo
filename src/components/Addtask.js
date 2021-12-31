import React from 'react'
import { useState } from 'react';

const AddTask = ({ addTask }) => {

    const [task, updateTask] = useState("")
    const [date, updateDate] = useState("")

    const clearForm = () => {
        addTask({task: task, date: date})
        updateTask("")
        updateDate("")
    }

    return (
        <div className='AddTask'>
            <input 
                className='TaskInput' 
                onChange={e=>updateTask(e.target.value)} 
                placeholder='Task'
                value={task}>
            </input>
            <input
                className='DateInput' 
                onChange={e=>updateDate(e.target.value)}
                placeholder='dd/mm/yyyy'
                value={date}>
            </input>
            <button 
                className='AddTaskButton'
                onClick={clearForm}>
                    Done
            </button>
        </div>
    )
}

export default AddTask
