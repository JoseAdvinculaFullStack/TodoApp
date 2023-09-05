import TodoItem from "../TodoItem"
import "./TodoBody.css"
import TodoFooter from "../TodoFooter"
import TodoFilter from "../TodoFilter"
import Note from "../Note"
const TodoBody = () =>{
    return(
        <main className="TodoBody">
            <TodoItem active={true}/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoFooter/>
            <TodoFilter/>
            <Note/>

        </main>
    )
}


export default TodoBody;