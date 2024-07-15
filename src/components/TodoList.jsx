import React from 'react';
import axios from 'axios';
import './TodoList.css';

function TodoList({ todos, fetchTodos }) {

    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/todos/${id}/`)
            .then(response => {
                console.log('Todo deleted:', response.data);
                
                const updatedTodos = todos.filter(todo => todo.id !== id);
                fetchTodos(updatedTodos);
            })
            .catch(error => {
                console.error('Error deleting todo:', error);
            });
    };

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        {todo.title}
                        {!todo.completed && (
                            <>
                                <button onClick={() => handleDelete(todo.id)}>Complete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;


