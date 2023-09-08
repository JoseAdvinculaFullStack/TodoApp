import { useContext } from "react";
import { TodoContext } from "../TodoContext";

const TodoCounter = () =>{
    const {completedTodos} = useContext(TodoContext)
    return (
        <div className="TodoCounter">
            <p>{completedTodos} items left</p>
        </div>
    )
}

export default TodoCounter;