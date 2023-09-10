import './TodoHeader.css'
import { v4 as uuidv4 } from 'uuid';
import todoImage from '../assets/Todo.png'; // Importa la imagen Todo.png
import lunaImage from '../assets/Luna.png'; // Importa la imagen Luna.png
import lightImage from '../assets/Light.svg'
import Oval from '../assets/Oval.svg'
import OvalDark from '../assets/OvalDark.svg'
import { useContext, useRef } from 'react';
import { TodoContext } from '../TodoContext';



const TodoHeader = () =>{
    const {addTodos,
          darkState,
          updateStateDark} = useContext(TodoContext);
    const inputRef = useRef(null);

    const handleKeyPress = (event) =>{
        if(event.key=="Enter"){
            const valueInput = inputRef.current.value;
            const newTodo = {
            id:uuidv4(),
            text:valueInput,
            completed:false
            }
            inputRef.current.value = ""
        addTodos(newTodo);
        }
    }

    const handleClicKDarkMode = () => {
        
        updateStateDark(!darkState)
        
    }

    console.log(darkState)
    
    return (
        <header className={`TodoHeader ${darkState ? 'dark':""}`}>
            <div className="TodoHeader__content">
                <img className="TodoHeader__image" alt='text header' src={todoImage} />
                <button className='TodoHeader__button--mode' onClick={()=>handleClicKDarkMode()}>
                    <img className="TodoHeader__image"  src={darkState ? lightImage : lunaImage}/>
                </button>
            </div>
            <div className={`TodoHeader__input TodoHeader__input--${darkState ? 'dark': ""}`}>
                <input type="text" placeholder='Create a new todo' ref={inputRef} onKeyDown={handleKeyPress}/>
                <div className='TodoHeader__circle'>
                    <img src={darkState ? OvalDark : Oval}/>

                </div>
            </div>
        </header>
    )
}
export default TodoHeader