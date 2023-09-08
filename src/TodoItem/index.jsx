import CancelButton from "../CancelButton"
import CheckButton from "../CheckButton"
import "./TodoItem.css"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

const TodoItem =({active,text,id})=>{
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: id})

    const style ={
        transform:CSS.Transform.toString(transform),
        transition
    }
    return(
        <div style={style} ref={setNodeRef} {...attributes} {...listeners} className="TodoItem">
            <CheckButton active={active} id={id}/>
            <p className={`${active ? "TodoItem__text--underline" : ""}`}>{text}</p>
            <CancelButton id={id}/>
        </div>
    )
}

export default TodoItem