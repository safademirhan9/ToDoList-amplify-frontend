// src/App.js
import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <AddTodo onAdd={handleAddTodo} />
          <TodoList todos={todos} onDelete={handleDeleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
