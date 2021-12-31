import React from 'react'

const Header = ({taskForm, updateForm}) => {
    return (
        <div className='Header'>
            <h1 className='Title'>Fullstack-Tasks</h1>
            <button className='HeaderAddTask' onClick={taskForm}>
                Add Task
            </button>
        </div>
    )
}

export default Header
