import { createContext, useContext } from "react";



export const TodoContext = createContext({
    todos:[ {
        id:1,
        todoText: "Todo Message",
        completed: false
    }],
    theme: "dark",


    addTodo: (todoMessage)=>{},
    updateTodo: (id, todoMessage
    )=>{},
    deleteTodo: (id)=>{},
    toggleComplete : (id)=>{}



});

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;

