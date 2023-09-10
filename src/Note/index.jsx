import { useContext } from 'react';
import './Note.css'
import { TodoContext } from '../TodoContext';
const Note = () =>{
    const {darkState} = useContext(TodoContext);
    return(
        <div className={`Note ${darkState ? 'Note--dark':""}`}>
            <p className='Note__text'>
             Drag and drop to reorder list
            </p>
        </div>
    )
}


export default Note