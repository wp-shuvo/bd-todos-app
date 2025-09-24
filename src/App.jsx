import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    const fetchTodosData = async () => {
     await fetch("http://localhost:5002/item/all")
      .then((res) =>  res.json())
      .then((data) => {
        setTodos(data.data); 
      })
      .catch((err) => console.error("Error fetching todos:", err));
    }
    fetchTodosData()
  }, []);

console.log('todos -> ' , todos);


  return (
    <div className="min-h-screen w-full  bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      <AddTodo />
      <div className="flex flex-col gap-y-3 w-full justify-center items-center">
           {
        todos?.map((todo , index) => <TodoItem key={index} todo={todo} />)
      }
   </div>
    
    </div>
  );
}
