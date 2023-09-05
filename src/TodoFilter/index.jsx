import './TodoFilter.css'
const TodoFilter = () => {
    return(
        <div className="TodoFilter">
            <div className='TodoContainer'>
                <button type="button"className="TodoFilter--all">All</button>
                <button type="button"className="TodoFilter--active">Active</button>
                <button type="button"className="TodoFilter--completed">Completed</button>
            </div>
        </div>
    )
}

export default TodoFilter