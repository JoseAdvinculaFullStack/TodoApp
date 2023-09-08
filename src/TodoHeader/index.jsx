import './TodoHeader.css'
import { v4 as uuidv4 } from 'uuid';
import todoImage from '../assets/Todo.png'; // Importa la imagen Todo.png
import lunaImage from '../assets/Luna.png'; // Importa la imagen Luna.png
import Oval from '../assets/Oval.svg'
import { useContext, useRef } from 'react';
import { TodoContext } from '../TodoContext';



const TodoHeader = () =>{
    const {addTodos} = useContext(TodoContext);
    const inputRef = useRef(null);

    const handleKeyPress = (event) =>{
        if(event.key=="Enter"){
            const valueInput = inputRef.current.value;
            const newTodo = {
            id:uuidv4(),
            text:valueInput,
            completed:false
            }
        addTodos(newTodo);
        }
        
    }
    
    return (
        <header className="TodoHeader">
            <div className="TodoHeader__content">
                <img className="TodoHeader__image" alt='text header' src={todoImage} />
                <img className="TodoHeader__image"  src={lunaImage}/>
            </div>
            <div className="TodoHeader__input">
                <input type="text" placeholder='Create a new todo' ref={inputRef} onKeyDown={handleKeyPress}/>
                <div className='TodoHeader__circle'>
                    <img src={Oval}/>
                </div>
            </div>
        </header>
    )
}
export default TodoHeader