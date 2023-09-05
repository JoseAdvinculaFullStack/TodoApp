import './TodoHeader.css'
import todoImage from '../assets/Todo.png'; // Importa la imagen Todo.png
import lunaImage from '../assets/Luna.png'; // Importa la imagen Luna.png
import Oval from '../assets/Oval.svg'

const TodoHeader = () =>{
    return (
        <header className="TodoHeader">
            <div className="TodoHeader__content">
                <img className="TodoHeader__image" alt='text header' src={todoImage} />
                <img className="TodoHeader__image"  src={lunaImage}/>
            </div>
            <div className="TodoHeader__input">
                <input type="text" placeholder='Create a new todo'/>
                <div className='TodoHeader__circle'>
                    <img src={Oval}/>
                </div>
            </div>
        </header>
    )
}
export default TodoHeader