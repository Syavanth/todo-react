import React, { useState } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  // Add a new Todo item
  const addTodo = (text) => {
    const newTodo = createTodoItem(text);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Toggle Todo completion state
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a Todo item
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  };

  // Helper function to create a Todo item
  const createTodoItem = (text) => ({
    text,
    completed: false,
    id: Date.now(),
  });

  return (
    <div className="App">
      <h1 className="app-title">To-Do App</h1>
      <TodoInput addTodo={addTodo} />
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
