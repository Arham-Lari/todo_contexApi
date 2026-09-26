import { useState } from 'react';
import { TodoProvider } from './context/index.js'
import { Todoform } from './components/index.js'

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
        <div className='w-dvw h-dvh bg-gray-800 flex justify-center '>
        <div className='w-fit h-fit bg-gray-700 shadow-2xl rounded-3xl m-10'>
        <Todoform/>
        </div>

        </div>

        </TodoProvider>
    );
}

export default App;
