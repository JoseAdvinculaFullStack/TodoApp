import { useContext } from "react"
import TodoCounter from "../TodoCounter"
import "./TodoFooter.css"
import { TodoContext } from "../TodoContext"

const TodoFooter = () => {
    const {deleteTodosCompleted,darkState} = useContext(TodoContext);
    return(
        <div className={`TodoFooter ${darkState ? 'TodoFooter--dark' : ""}`}>
            <div className={`TodoFooter__Counter ${darkState ? 'TodoFooter__Counter--dark' : ""}`}>
                <TodoCounter/>
            </div>
            <button type="button" className={`TodoFooter--completed ${darkState ? 'TodoFooter__button--dark' :""}`} onClick={()=> deleteTodosCompleted()}>
                Clear Completed
            </button>
        </div>
    )
}


export default TodoFooter