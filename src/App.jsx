import React, { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTask = ()=> {
        if (inputValue.trim()=='')return;
        setTasks([...tasks, inputValue]);
        setInputValue('');
    }

    return (
        <div>
        <input
            type='text'
            value={ inputValue }
            onChange={(e)=>setInputValue(e.target.value)}
            placeholder='Add a Task'
        />
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
            {tasks.map((tasks,index)=> (
                <li key={index}>{tasks}</li>
            ))}
        </ul>
        </div>

    )
}

export default App;


