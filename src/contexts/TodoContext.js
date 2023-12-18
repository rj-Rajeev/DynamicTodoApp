import React from "react";
import { useContext } from "react";
import {createContext} from "react";

export const TodoContext = createContext({
    todos:[{
        id: 0,
        todoMsg:"Todo Massage",
        completed : false
    }],
    addTodo: (todoMsg)=>{},
    updateTodo: (id, todoMsg)=>{},
    deleteTodo: (id)=>{},
    toggleCompleted: (id)=>{}
});


export const useTodo =()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;