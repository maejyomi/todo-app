import { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";

const TodoItem = ({ todo }) => {
  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);
  const handleCheck= (e) => {
    setCheck(e.target.checked);
  }

  const handleEdit = () => {
    console.log("클릭")
    setEdit(true);
  }

  const submitEdit = () => {
    console.log("편집 완료");
    setEdit(false);
  }

  useEffect(()=>{
    console.log(check);

  },[check])
  return (
    <div className="flex justify-between my-2">
      <div className="flex items-center">
        
        <input type="checkbox" onChange={handleCheck} className="border-gray-400 rounded-full mr-3" />
        {
          check
          ? <p className="text-gray-300 line-through">{todo.content}</p>
          : edit
          ? 
          <div>
            <input type="text" defaultValue={todo.content} className="border-gray-400 rounded-lg p-1 pl-2"></input>
          </div>
          :
          <div>
            {todo.content}
          </div>
          
        }
        
      </div>
      <div className="flex items-center">
        {
          check
          ?<div>
              <button onClick={handleEdit} disabled className="text-xl mr-2 text-gray-200"><FiEdit2 /></button>
              <button className="text-xl text-gray-400 hover:text-red-600"><RiDeleteBin6Line /></button>
            </div>
          : edit
          ?
          <button onClick={submitEdit}><BsCheckLg  className="text-2xl text-gray-400 hover:text-green-500"/></button>
          :
            <div>
              <button onClick={handleEdit} className="text-xl mr-2 text-gray-400 hover:text-blue-500"><FiEdit2 /></button>
              <button className="text-xl text-gray-400 hover:text-red-600"><RiDeleteBin6Line /></button>
            </div>
        }
        
      </div>
    </div>
  )
}

export default TodoItem
