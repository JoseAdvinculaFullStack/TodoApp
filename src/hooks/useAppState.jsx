import { useState } from "react";
import useLocalStorage from "./useLocalStorage"

const useAppState = () => {
    const{
        item:todos,
        saveItem:saveTodos,
        loading,
        error
    } = useLocalStorage("TODOS_V1",[]);

    
    const filterTodosActive = (todo) => !!todo.completed;
    const filterTodosCompleted= (todo)=> !todo.completed;
    
    const categorias = 
    {
        allTodos: ()=>true,
        todosActive: filterTodosActive,
        todosCompleted:filterTodosCompleted,
    }

    const [categoriaSeleccionada,setCategoriaSeleccionada]=useState("allTodos");
    const [addValue,setAddValue] = useState("");
    const completedTodos = todos.filter((todo) => !!todo.completed).length;

    const completeTodos = (idTodo) =>
    {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id === idTodo);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodos = (idTodo) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id ===idTodo );
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
    }
    return{
        categorias,
        categoriaSeleccionada,
        setCategoriaSeleccionada,
        addValue,
        setAddValue,
        completedTodos,
        completeTodos,
        deleteTodos,
        loading,
        todos,
        error
    }
}


export default useAppState;