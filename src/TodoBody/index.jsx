import TodoItem from "../TodoItem"
import "./TodoBody.css"
import TodoFooter from "../TodoFooter"
import TodoFilter from "../TodoFilter"
import Note from "../Note"
import useAppState from "../hooks/useAppState"
import TodoList from "../TodoList/index.jsx"

const TodoBody = () =>{
    const {categorias,
        categoriaSeleccionada,
        setCategoriaSeleccionada,
        addValue,
        setAddValue,
        completedTodos,
        completeTodos,
        deleteTodos,
        loading,
        todos,
        error} = useAppState();

        console.log(todos.filter(categorias[categoriaSeleccionada]));

    return(
        <main className="TodoBody">
            <TodoList>
                {
                    todos.filter(categorias[categoriaSeleccionada]).map((todo,index)=>(
                        <TodoItem key={index} text={todo.text} active={todo.completed}/>
                    ))
                }
            </TodoList>
            <TodoFooter/>
            <TodoFilter/>
            <Note/>
        </main>
    )
}


export default TodoBody;