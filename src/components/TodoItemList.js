import TodoItem from "./TodoItem"

const TodoItemList = ({ todos, deleteTodo, updateTodo }) => {
    todos.map((item) => console.log(item.content));

    return (
        <div>

            <hr />
            <div className="mt-4">
                {
                    todos.map((item) => <TodoItem 
                                            todo={item} 
                                            key={item.id} 
                                            deleteTodo={deleteTodo} 
                                            updateTodo={updateTodo}/>)
                }
            </div>
        </div>
    )
}

export default TodoItemList
