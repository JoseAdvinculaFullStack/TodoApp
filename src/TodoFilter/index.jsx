import './TodoFilter.css'
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
const TodoFilter = () => {
    const { categoriaSeleccionada,setCategoriaSeleccionada,darkState} = useContext(TodoContext);
    const handleClick=(nameCategory)=>{
        setCategoriaSeleccionada(nameCategory)
    }



    return(
        <div className="TodoFilter">
            <div className={`TodoContainer ${darkState ? "TodoContainer--dark": "" }`}>
                <button type="button"className={`TodoFilter--all ${categoriaSeleccionada==="allTodos"? "selected" : ""}`} onClick={()=>handleClick("allTodos")}>All</button>
                <button type="button"className={`TodoFilter--active ${categoriaSeleccionada==="todosActive" ? "selected" : ""}`} onClick={()=>handleClick("todosActive")}>Active</button>
                <button type="button"className={`TodoFilter--completed ${categoriaSeleccionada==="todosCompleted" ? "selected": ""}`} onClick={()=>handleClick("todosCompleted")}>Completed</button>
            </div>
        </div>
    )
}

export default TodoFilter