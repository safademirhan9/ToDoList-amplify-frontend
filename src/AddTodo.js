// src/AddTodo.js
import React, { useState } from 'react';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="form-control"
              placeholder="Add a new to-do"
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddTodo;
