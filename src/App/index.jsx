import './App.css'
import { TodoProvider } from '../TodoContext'
import AppTodos from './AppTodos';


function App() {
  return (
    <TodoProvider>
        <AppTodos/>
    </TodoProvider>
  )
}

export default App
