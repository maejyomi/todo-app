import TodoItem from "./TodoItem"

const TodoItemList = ({ todos, deleteTodo }) => {
    todos.map((item) => console.log(item.content));

    return (
        <div>

            <hr />
            <div className="mt-4">
                {
                    todos.map((item) => <TodoItem todo={item} key={item.id} deleteTodo={deleteTodo}/>)
                }
            </div>
        </div>
    )
}

export default TodoItemList
