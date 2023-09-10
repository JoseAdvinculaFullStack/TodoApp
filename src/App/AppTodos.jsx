import './App.css'
import TodoHeader from '../TodoHeader'
import TodoBody from '../TodoBody'
import { TodoContext} from '../TodoContext'
import { useContext} from 'react';


function AppTodos() {
  const {darkState} = useContext(TodoContext);

  return (

    <div className={`App ${darkState ? 'App--dark' : '' }`}>
      
        <TodoHeader/>
        <TodoBody/>
      
    </div>

  )
}

export default AppTodos
