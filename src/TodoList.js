import React from 'react';

function TodoList({ todos, onDelete }) {
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