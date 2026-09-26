import { useState } from 'react';
import { TodoProvider } from './context/index.js'
import { Todoform } from './components/Todoform.jsx'
import TodoIteam from './components/TodoIteams.jsx'

export function App(){
    const[todos,setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos((prev) => [...prev,{id:Date.now(),...todo}])
        console.log(todos)
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
        <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
        <Todoform />
        </div>
        <div className="flex flex-wrap gap-y-3">
        {
            todos.map(todo => (
                <div key={todo.id}
                className='w-full'>
                <TodoIteam todo={todo}/>
                </div>
            ) )
        }
        </div>
        </div>
        </div>
        </TodoProvider>
    );
}

export default App;
