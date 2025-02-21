import React, { useState } from "react";

const TodoList = ({ tasks, removeTask }) => {
    const [completed, setCompleted] = useState(Array(tasks.length).fill(false));

    const toggleComplete = (index) => {
        const newCompleted = [...completed];
        newCompleted[index] = !newCompleted[index];
        setCompleted(newCompleted);
    };

    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} className={completed[index] ? "completed" : ""}>
                    <span onClick={() => toggleComplete(index)}>{task}</span>
                    <button onClick={() => removeTask(index)}>❌</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;