import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import TodoForm from './components/todoForm/TodoForm';
import { MdAddCircle } from 'react-icons/md';
import { TodoProvider, useTodo } from './contexts/TodoContext';
import Todo from './components/todo/todo';

const App = () => {
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [todos, setTodos]= useState([]);
  const playGround = useRef(null)

  const addTodo = (todo)=>{
    setTodos((prev)=>[...prev, todo])
    setShowTodoForm(false);
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>prev.map((prevTodo) =>prevTodo.id === id ? { ...prevTodo, todoMsg: updatedTodo } : prevTodo
      )
    );
  };

  const deleteTodo =(id)=>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleCompleted =(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? {...prevTodo, 
      completed: !prevTodo.completed }: prevTodo)))
  }


  const handleAddClick = () => {
    setShowTodoForm(true);
  };

  useEffect(()=>{
    const todos = JSON.parse((localStorage.getItem("todos")));
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log(localStorage);
  }, [todos])
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleCompleted}}>
      <div ref={playGround} className="fieldApp">
        <h1>TODO.</h1>
        <div className="addIcon" onClick={handleAddClick}>
          <MdAddCircle size={100} />
        </div>
        <div className="todos-container">
        {todos.map((todo)=>(<div key={todo.id}><Todo todo={todo} playGround={playGround} /></div>))}
        </div>
      {showTodoForm && <TodoForm/>}
      </div>
    </TodoProvider>
  );
};

export default App;
