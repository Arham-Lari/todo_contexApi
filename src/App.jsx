import { useState } from 'react';
import { TodoProvider } from './context/index.js'

export function App(){
    const[todos,setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos((prev) => [...prev,{...todo,id:Date.now(),completed:false,}])
    };

    const updateTodo =(id,todo) => {
        setTodos(prev => prev.map(prevTodo => 
            (prevTodo.id == id)?{...todo}:prev
        ))
    };

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(prevtodo => prevtodo.id != id))
    };

    const toggleComplete = (id) =>{
        setTodos(prev => prev.map(prevTodo =>
            (prevTodo.id == id )?{...prevTodo,completed:!prevTodo.completed}: prevTodo
        ))
    };

    return (
        <TodoProvider value={{addTodo,updateTodo,todos,deleteTodo,toggleComplete}}>


        </TodoProvider>
    );
}

export default App;
