import { useContext } from "react"
import TodoCounter from "../TodoCounter"
import "./TodoFooter.css"
import { TodoContext } from "../TodoContext"

const TodoFooter = () => {
    const {deleteTodosCompleted} = useContext(TodoContext);
    return(
        <div className="TodoFooter">
            <div className="TodoFooter__Counter">
                <TodoCounter/>
            </div>
            <button type="button" className="TodoFooter--completed" onClick={()=> deleteTodosCompleted()}>
                Clear Completed
            </button>
        </div>
    )
}


export default TodoFooter