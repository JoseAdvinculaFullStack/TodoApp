import { useContext } from 'react'
import CancelSvg from '../CancelSvg'
import './CancelButton.css'
import { TodoContext } from '../TodoContext'
const CancelButton = ({id}) => {
    const {deleteTodos} =useContext(TodoContext);

    const handleClick = (event) => {
        event.stopPropagation();
        deleteTodos(id);
    }
    return(
        <button type="button" className="CancelButton" onClick={handleClick}>
            <CancelSvg/>
        </button>
    )
}

export default CancelButton