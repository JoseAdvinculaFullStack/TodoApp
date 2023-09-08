import './TodoFilter.css'
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
const TodoFilter = () => {
    const { categoriaSeleccionada,setCategoriaSeleccionada,todos,categorias} = useContext(TodoContext);
    const handleClick=(nameCategory)=>{
        setCategoriaSeleccionada(nameCategory)
    }
    return(
        <div className="TodoFilter">
            <div className='TodoContainer'>
                <button type="button"className="TodoFilter--all" onClick={()=>handleClick("allTodos")}>All</button>
                <button type="button"className="TodoFilter--active" onClick={()=>handleClick("todosActive")}>Active</button>
                <button type="button"className="TodoFilter--completed" onClick={()=>handleClick("todosCompleted")}>Completed</button>
            </div>
        </div>
    )
}

export default TodoFilter