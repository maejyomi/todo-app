import TodoItem from "./TodoItem"

const TodoItemList = ({ todos }) => {
    todos.map((item) => console.log(item.content));

    return (
        <div>

            <hr />
            <div className="mt-4">
                {
                    todos.map((item) => <TodoItem todo={item} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default TodoItemList
