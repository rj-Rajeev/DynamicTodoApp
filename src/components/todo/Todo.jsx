import React, { useState, useRef } from "react";
import "./Todo.css";
import { FaPenAlt } from "react-icons/fa";
import { CiSaveUp1 } from "react-icons/ci";
import { MdOutlineContentCut } from "react-icons/md";
import { useTodo } from "../../contexts/TodoContext";
import { motion } from "framer-motion";

const Todo = ({ todo, playGround }) => {
  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();
  const [updatable, setUpdatable] = useState(false);

  const handleUpdateTodo = () => {
    setUpdatable(!updatable);
  };

  return (
    <motion.div
      drag
      dragConstraints={playGround}
      className="contentBoxTodo"
    >
      <div className="editTool">
        <button onClick={handleUpdateTodo}>
          {updatable ? <CiSaveUp1 size={20} /> : <FaPenAlt size={15} />}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <MdOutlineContentCut size={15} />
        </button>
      </div>
      <div className="todoMsg">
        {updatable ? (
          <textarea
            name="todoMsg"
            cols="30"
            rows="10"
            value={todo.todoMsg}
            onChange={(e) => updateTodo(todo.id, e.target.value)}
          ></textarea>
        ) : (
          <h5>{todo.todoMsg}</h5>
        )}
      </div>
      <div className="bottom">
        <button onClick={() => toggleCompleted(todo.id)}>
          {todo.completed ? (
            <h4 style={{ backgroundColor: "orange" }}>Completed</h4>
          ) : (
            <h4 style={{ backgroundColor: "green" }}>Complete</h4>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default Todo;
