import TodoCounter from "../TodoCounter"
import "./TodoFooter.css"

const TodoFooter = () => {
    return(
        <div className="TodoFooter">
            <div className="TodoFooter__Counter">
                <TodoCounter/>
            </div>
            <button type="button" className="TodoFooter--completed">
                Clear Completed
            </button>
        </div>
    )
}


export default TodoFooter