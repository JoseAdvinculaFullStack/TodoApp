import { useContext } from 'react'
import CheckSvg from '../CheckSvg'
import './CheckButton.css'
import { TodoContext } from '../TodoContext'
const CheckButton = ({active,id}) => {
    const {completeTodos} = useContext(TodoContext)
    return(
        <button type="button" className={`CheckButton ${ active ? "CheckButton--active": ""}`} onClick={()=>completeTodos(id)}>
            <CheckSvg active="true"/>
        </button>
    )
}

export default CheckButton