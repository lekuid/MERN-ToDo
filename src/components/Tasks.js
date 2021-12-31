import React from 'react'
import Task from './Task'

const Tasks = ({ taskList, deleteTask }) => {
    return (
        <div className='Tasks'>
            <ul className='TaskList'>
                {taskList.map((x) => (
                    <li key={x._id}>
                        <Task 
                            taskName={x.task}
                            taskDate={x.time}
                            deleteTask={()=>deleteTask({id:x._id})}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks
