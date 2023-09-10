import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'
const TodoCounter = () =>{
    const {completedTodos} = useContext(TodoContext)
    return (
        <div className="TodoCounter">
            <p>{completedTodos} items left</p>
        </div>
    )
}

export default TodoCounter;