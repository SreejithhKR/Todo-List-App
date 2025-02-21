import React, { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState(["Learn React", "Build a To-Do List", "Style it creatively"]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input.trim()) {
            setTasks([...tasks, input]);
            setInput("");
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>📝 To-Do List</h1>
            <div className="input-container">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Add a new task..." 
                />
                <button onClick={addTask}>Add</button>
            </div>
            <TodoList tasks={tasks} removeTask={removeTask} />
        </div>
    );
};
export default App;