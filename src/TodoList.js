// src/TodoList.js
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function TodoList( onDelete ) {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        // Fetch the to-do list from your API
        axios.get('YOUR_API_ENDPOINT/todos')
          .then((response) => {
            setTodos(response.data);
          })
          .catch((error) => {
            console.error('Error fetching to-do list:', error);
          });
    }, []);

    return (
        <ul className="list-group mt-4">
        {todos.map((todo) => (
            <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center custom-bg-color custom-text-color"
            >
            {todo.text}
            <button
                onClick={() => onDelete(todo.id)}
                className="btn btn-danger btn-sm"
            >
                Delete
            </button>
            </li>
        ))}
        </ul>
    );
}

export default TodoList;
