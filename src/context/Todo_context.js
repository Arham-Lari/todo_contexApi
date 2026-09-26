import { useContext,createContext } from "react";

export const Todo_Context = createContext({
    todos:[],

    //function for performing diferent action in todo
    
    addTodo(todo){},//to add a new todo
    updateTodo(id,todo){},//to update a existing todo
    toggleComplete(id){},// to make a todo appear complete
    deleteTodo(id){},// to delete the todo
});

//to use the different method of todo in differnt components
export const useTodo =()=>{
    return useContext(Todo_Context);
}

export const TodoProvider = Todo_Context.Provider;
