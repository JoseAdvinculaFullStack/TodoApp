import CheckSvg from '../CheckSvg'
import './CheckButton.css'
const CheckButton = ({active}) => {
    return(
        <button type="button" className={`CheckButton ${ active ? "CheckButton--active": ""}`}>
            <CheckSvg active="true"/>
        </button>
    )
}

export default CheckButton