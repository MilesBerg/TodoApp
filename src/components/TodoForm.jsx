import React, { useState } from 'react';
import axios from 'axios';
import './TodoForm.css';

function TodoForm({ addTodo }) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting new todo:', title);
        
        axios.post('http://127.0.0.1:8000/api/todos/', { title, completed: false })
            .then(response => {
                console.log('Todo created:', response.data);
                addTodo(response.data); 
                setTitle(''); 
            })
            .catch(error => {
                console.error('Error creating todo:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;


