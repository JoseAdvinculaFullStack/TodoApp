import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoHeader from '../TodoHeader'
import TodoBody from '../TodoBody'
import { TodoProvider } from '../TodoContext'


function App() {
  
  return (
    <>
      <TodoProvider>
        <TodoHeader/>
        <TodoBody/>
      </TodoProvider>
      
    </>
  )
}

export default App
