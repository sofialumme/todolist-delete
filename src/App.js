import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState({ description: '', date: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  const itemRows = todos.map((todo, index) =>
    <tr key={index}>
      <td>{todo.date}</td>
      <td>{todo.description}</td>
      <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
    </tr>
  );

  return (
    <div>
      <h1>Simple Todolist</h1>
      <h2>Add todo:</h2>
      <label>Description: </label>
      <input type="text" name="description" onChange={inputChanged} value={todo.description} />
      <label>Date: </label>
      <input type="text" name="date" onChange={inputChanged} value={todo.date} />
      <button onClick={addTodo}>Add</button>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th></th>
          </tr>
          {itemRows}
        </tbody>
      </table>
    </div>
  );
};

export default App;