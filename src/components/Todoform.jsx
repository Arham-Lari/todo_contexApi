import { useState } from "react"
import { useTodo } from "../context";

export const Todoform = () => {
    const [msg,setMsg] = useState("");
    const {addTodo} = useTodo();

    const add =(e) =>{
       e.preventDefault(); 

        if (!msg) return;

        addTodo({msg})
        setMsg();
    }
  return (
      <form onSubmit={add} className="flex">
      <input 
      type="text"
      placeholder="write todo .."
      className="bg-white text-center ml-2 m-2 rounded-l-2xl text-3xl mr-0"
      value={msg}
      onChange={(e)=>setMsg(e.target.value)}
      />
      <button type="submit" className="bg-green-500 rounded-r-xl font-bold  text-2xl pl-2 pr-2 mr-0 hover:bg-amber-300">add</button>
      
      </form>
  )
}

export default Todoform;

