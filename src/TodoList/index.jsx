import React from "react"
import './TodoList.css'

const TodoList = ({children}) => {
    return(
        <div className="TodoList">
            {children}
        </div>
    )
}


export default TodoList