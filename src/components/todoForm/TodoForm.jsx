import React, { useEffect, useState } from 'react';
import './TodoForm.css';
import { useTodo } from '../../contexts/TodoContext';

const TodoForm = () => {
    const [todo, setTodo] = useState('');
    const {addTodo} = useTodo();

    const onChange = (e) => {
        setTodo(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo({id: Date.now(), todoMsg:todo, completed:false});
        setTodo('');
    }
    return (
        <div className="contentBoxForm">
            <form onSubmit={onSubmit}>
                <textarea value={todo} onChange={onChange} name="todo" id="" cols="30" rows="10"  placeholder="Enter your todo..."></textarea>
                <button type="submit" disabled={!todo.trim()}>ADD</button>
            </form>
        </div>
    );
}

export default TodoForm;
