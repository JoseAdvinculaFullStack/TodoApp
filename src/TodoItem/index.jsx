import CancelButton from "../CancelButton"
import CheckButton from "../CheckButton"
import "./TodoItem.css"
const TodoItem =({active})=>{
    return(
        <div className="TodoItem">
            <CheckButton active={active}/>
            <p className={`${active ? "TodoItem__text--underline" : ""}`}>Complete online JavaScript course</p>
            <CancelButton/>
        </div>
    )
}

export default TodoItem