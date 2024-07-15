import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './TodoApp.css';

function TodoApp() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos(); 
    }, []);

    const fetchTodos = () => {
        axios.get('http://127.0.0.1:8000/api/todos/')
            .then(response => {
                setTodos(response.data);
                console.log('Todos fetched:', response.data);
            })
            .catch(error => {
                console.error("Error fetching todos:", error);
            });
    };

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]); 
    };

    return (
        <div className="todo-app">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodo} /> 
            <TodoList todos={todos} /> 
        </div>
    );
}

export default TodoApp;
