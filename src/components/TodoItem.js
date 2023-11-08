import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoItem = ({ todo }) => {
  console.log(todo);
  return (
    <div className="flex justify-between my-2">
      <div className="flex items-center">
        <input type="checkbox" className="border-gray-400 rounded-full mr-3" />
        {todo.content}
      </div>
      <div className="flex items-center">
        <button className="text-xl mr-2 text-gray-400 hover:text-green-700"><FiEdit2 /></button>
        <button className="text-xl text-gray-400 hover:text-red-600"><RiDeleteBin6Line /></button>
      </div>
    </div>
  )
}

export default TodoItem
