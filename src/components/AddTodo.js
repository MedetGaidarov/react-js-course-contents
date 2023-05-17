import { useState } from "react"

function AddTodo({onClickAddTodo}) 
{
    const [text, setText] = useState('')

    const handleOnClick = (e) =>
    {
        e.preventDefault()
        const todo = {
            id: Date.now(),
            text: text,
            done : false
        }

        onClickAddTodo(todo)
    }

    const handleChange = (e) =>
    {
        setText(e.target.value)
        console.log(text)
    }

    return ( <div style={{display:"flex"}}>
            <input type="text"
            value={text}
                onChange={(e) => handleChange(e)}
            />
            <button onClick = {handleOnClick}>add</button>
            </div>)
}

export default AddTodo