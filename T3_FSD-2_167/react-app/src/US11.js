// Task-6

// Write a program to build React app for Task todo list.

// Add 1 input field and button and by clicking on button display entered Task on the same page.

// Also, add delete button with each added Task to delete the Task

import React, { useState } from 'react';
function US11() {
    const [Task, setTask] = useState("");
    const [Todolist, setTasks] = useState([]);
    function hc(event) {
        setTask(event.target.value)
    }
    const handleAddTask = () => {
        if (!Todolist.includes(Task)) {
            setTasks([...Todolist, Task]);
        }
        else {
            alert("Task Already Added")
        }
    }
    const handleDeleteTask = (taskname) => {
        setTasks(Todolist.filter((task) => { if (Task !== taskname) { return true } else { return false } }))
    }

    return (
        <>
            <input type='text' onChange={hc} />
            <button onClick={handleAddTask}>ADD</button>
            {
                Todolist.map((val) => {
                    return (<> <h1>{val}</h1> <button onClick={() => handleDeleteTask(val)}>Delete</button></>)
                })
            }
        </>
    )

}
export default US11