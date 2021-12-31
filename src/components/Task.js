import React from 'react'

const Task = ({ taskName, taskDate, deleteTask }) => {
    return (
        <div className='task'>
            <h3 className='taskName'>{taskName}</h3>
            <h3 className='taskDate'>{taskDate}</h3>
            <button className='deleteTask' onClick={deleteTask}>X</button>
        </div>
    )
}

export default Task
