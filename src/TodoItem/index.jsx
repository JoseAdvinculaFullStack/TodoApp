import { useContext, useEffect, useState } from "react"
import CancelButton from "../CancelButton"
import CheckButton from "../CheckButton"
import "./TodoItem.css"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { TodoContext } from "../TodoContext"

const TodoItem =({active,text,id})=>{
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: id})
    const {
        darkState} = useContext(TodoContext);

    const style ={
        transform:CSS.Transform.toString(transform),
        transition
    }
    useEffect(() => {
        setEntered(true);
      }, []);

    const [entered, setEntered] = useState(false);
    return(
        <div style={style} ref={setNodeRef} {...attributes} {...listeners} className={`TodoItem ${darkState ? 'TodoItem--dark':""} ${entered ? 'TodoItem-entered' : ''}`}>
            <CheckButton active={active} id={id}/>
            <p className={`${active ? "TodoItem__text--underline" : ""}`}>{text}</p>
            <CancelButton id={id}/>
        </div>
    )
}

export default TodoItem