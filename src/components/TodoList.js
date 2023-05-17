import Todo from "./Todo"

function TodoList( {todoList}) 
{
    return (
        <div>
            
            {todoList.map((todo)=>
            (
                <div key = {todo.id} style={{display: "flex"}} > 

                    <Todo todo = {todo}/>
                </div>
            ))}

            
        </div>
    )
}

export default TodoList