import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddTodoAction, RemoveTodoAction } from "./ReduxPractice/TodoAction"

const TodoApplication = () => {
    const [todo, setTodo] = useState()

    const dispatch = useDispatch()
    const Todo = useSelector((state) =>   state.Todo)
    console.log(Todo, 'in')
    const {todos} = Todo

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(AddTodoAction(todo))
        console.log("triggered")

    }

const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t))
}

  
    return(
        <>
        <center >
            <form onSubmit={handleSubmit}>
        <h1 style={{color:"white"}}>Todo Application using React Redux</h1>
        <input placeholder="please enter todo" type="input" style={{width:'40%', height:"40px" , borderRadius:"20px"}} onChange={(e) => setTodo(e.target.value)}/>
        <button type="submit" style={{height:"50px",width:"50px",borderRadius:"25px", background:"white"}}>Go</button>
        </form>
        <br/>
        <ul>
            {todos && todos.map((t) => (
                 <li key = {t.id} style={{padding:"10px",width:'50%', height:"40px" , borderRadius:"20px", background:"blue", display:"flex",flexDirection:'row',alignItems:"center",justifyContent:"space-between",marginBottom:"10px"}}>
                 <span >{t.todo}</span>
                 <button style={{height:"30px",width:"80px",borderRadius:"25px", background:"red",borderWidth:'0px' , marginRight:'5px'}} onClick={() => removeHandler(t)}>Delete</button>
 
             </li>

            ))}
           
        </ul>

        </center>
        </>
    )
}

export default TodoApplication