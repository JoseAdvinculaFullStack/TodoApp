import React from "react";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage"
import { v4 as uuidv4 } from 'uuid';
const TodoContext = React.createContext();
const TodoProvider = ({children}) => {
    const [categoriaSeleccionada,setCategoriaSeleccionada]=useState("allTodos");
    const{
        item:todos,
        saveItem:saveTodos,
        loading,
        error
    } = useLocalStorage("TODOS_V1",[]);

    
    const filterTodosActive = (todo) => !todo.completed;
    const filterTodosCompleted= (todo)=> !!todo.completed;
    
    const categorias = 
    {
        allTodos: ()=>true,
        todosActive: filterTodosActive,
        todosCompleted:filterTodosCompleted,
    }

    
    const [addValue,setAddValue] = useState("");
    const completedTodos = todos.filter((todo) => !!todo.completed).length;

    const completeTodos = (idTodo) =>
    {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id === idTodo);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };
    const deleteTodos = (idTodo) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id ===idTodo );
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
    }

    const deleteTodosCompleted = ()=>{
        const newTodos = todos.filter(filterTodosActive);
        console.log(newTodos);
        saveTodos(newTodos);
    }

    const addTodos = (newTodo) => {
        const newTodos = [...todos];
        newTodos.push(newTodo);
        saveTodos(newTodos);
    }

    const updateTodos = (newTodos) => {
        saveTodos(newTodos)
    }

    const filterTodos = todos.filter(categorias[categoriaSeleccionada]);
    return(
        <TodoContext.Provider value={{
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
            error,
            filterTodos,
            deleteTodosCompleted,
            addTodos,
            updateTodos
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export {TodoProvider,TodoContext};