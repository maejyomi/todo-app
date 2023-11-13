import { useState, useEffect, useRef } from "react";
import TodoItemList from "./TodoItemList"
import { BiSolidMessageSquareAdd } from "react-icons/bi";

const TodoMain = () => {
    const today = new Date().toISOString().slice(0, 10).split("-");
    const content = useRef();
    const [id, setId] = useState(0);
    const [todos, setTodos] = useState([]);

    const handleAdd = (e) => {
        console.log(content.current.value);
        
        const todo = {
            id: id,
            content : content.current.value,
        };

        setTodos(todos.concat(todo));
        setId(id+1);
        content.current.value="";
    }

    const deleteTodo = (targetId) => {
        console.log(targetId);
        setTodos(()=>{
            return todos.filter((item)=>item.id != targetId);
        })
    }

    return (
        <div className="rounded-lg bg-white shadow-xl w-[512px] h-[650px] m-auto p-8">
            <div className="flex justify-between mb-6 text-xl">
                <h1>TODO</h1>
                <p className="text-gray-400">{today[0]}.{today[1]}.{today[2]}</p>
            </div>
            <div className="flex items-center justify-center p-1 mb-8">
                <input ref={content} type="text" name="contentText" placeholder="오늘의 할 일은?" 
                    className="rounded-lg border-solid border-gray-300 w-5/6 mr-2 focus:border-blue-300 focus:ring-blue-300" />
                <button onClick={handleAdd}>
                    <BiSolidMessageSquareAdd className="text-5xl text-blue-300 hover:text-blue-500" />
                </button>
            </div>
            <TodoItemList todos={todos} deleteTodo={deleteTodo}/>
        </div>
    )
}

export default TodoMain
