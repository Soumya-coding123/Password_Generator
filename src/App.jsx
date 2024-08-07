import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('background1.jpg');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const handleEditTodo = (index, newTodo) => {
    setTodos(todos.map((todo, i) => (i === index ? newTodo : todo)));
  };

  const handleBackgroundImageChange = (e) => {
    setBackgroundImage(e.target.files[0].name);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-list-app" style={{ backgroundImage: black }}>
      <h1>Remember Me!</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          // className="newTodo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Things to be taken."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            <button onClick={() => handleEditTodo(index, prompt('Enter new todo item'))}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

 export default App;
