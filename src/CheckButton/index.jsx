import { useContext } from 'react'
import CheckSvg from '../CheckSvg'
import './CheckButton.css'
import { TodoContext } from '../TodoContext'
const CheckButton = ({active,id}) => {
    const {completeTodos,darkState} = useContext(TodoContext)
    console.log(darkState)
    return(
        <button type="button" className={`CheckButton ${ active ? "CheckButton--active": ""} ${darkState ? 'CheckButton-dark' : ''}`} onClick={()=>completeTodos(id)}>
            <CheckSvg dark_value={darkState ? "true": "false"}/>
        </button>
    )
}

export default CheckButton