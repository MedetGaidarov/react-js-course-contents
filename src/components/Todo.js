



function Todo({todo})
{
    return (
        <div style={{display: "flex"}} > 
            <input type="checkbox" />
            <p>{todo.text}</p>
        </div>
    )
}

export default Todo