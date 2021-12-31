import './App.css';
import { useState } from 'react';
import { useEffect } from 'react'

import Header from './components/Header';
import AddTask from './components/Addtask';
import Tasks from './components/Tasks';


function App() {

  // HOOKS
  // hook with empty [] to run function once at start
  useEffect(()=>{
    getTasks()
  }, [])

  // STATES
  const [addTaskForm, addTaskFormState] = useState(false)
  const [tasks, setTasks]= useState([])

  // API ROUTES

  // get tasks
  const tasksURL = "http://localhost:5000/tasks"
  const getTasks = async () => { await fetch(tasksURL, {
      method: "GET",
      mode: "cors",
      headers: {
        "content-type": "application/json"
      }
    }).then(async res => { setTasks(await res.json()) })
  }

  // add new task
  const taskAddURL = "http://localhost:5000/addTask"
  const addTask = async (data) => { fetch(taskAddURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => {if(res) getTasks()})
  }

  // delete task
  const deleteURL = "http://localhost:5000/removeTask"
  const deleteTask = async (id) => { fetch(deleteURL, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(id)
    }).then(res => {if(res) getTasks()})
  }

  // APP
  return (
    <>
    <Header 
      taskForm={()=>addTaskFormState(!addTaskForm)} 
      updateForm={getTasks}/>

    {addTaskForm ? <AddTask 
      addTask={addTask}/> : <></>} 

    <Tasks 
      taskList={tasks} 
      deleteTask={deleteTask}/>
    </>
  ); // condition ?(if) trueOut :(or) falseOut
}

export default App;
