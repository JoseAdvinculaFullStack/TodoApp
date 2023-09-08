import TodoItem from "../TodoItem"
import "./TodoBody.css"
import TodoFooter from "../TodoFooter"
import TodoFilter from "../TodoFilter"
import Note from "../Note"
import { TodoContext } from "../TodoContext"
import TodoList from "../TodoList/index.jsx"
import { useContext } from "react"
import { DndContext, closestCenter,PointerSensor,useSensor,useSensors } from "@dnd-kit/core"
import { SortableContext,verticalListSortingStrategy,arrayMove } from "@dnd-kit/sortable"

const TodoBody = () =>{
    const {filterTodos,updateTodos} = useContext(TodoContext);

    const sensors = useSensors(
        useSensor(PointerSensor,{
            activationConstraint:{
                distance:8,
            }
        })
    )
    const handleDragEnd = (event) =>{
        const {active,over} = event
        const oldIndex = filterTodos.findIndex(todo => todo.id===active.id);
        const newIndex = filterTodos.findIndex(todo => todo.id===over.id)
        updateTodos(arrayMove(filterTodos,oldIndex,newIndex));
    }
    
    return(
        <main className="TodoBody">
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} sensors={sensors}>
                <TodoList>
                    <SortableContext items={filterTodos} strategy={verticalListSortingStrategy}>
                    {
                        filterTodos.map((todo,index)=>(
                            <TodoItem key={index} id={todo.id} text={todo.text} active={todo.completed}/>
                        ))
                    }
                    </SortableContext>
                </TodoList>
            </DndContext>
            <TodoFooter/>
            <TodoFilter/>
            <Note/>
        </main>
    )
}


export default TodoBody;