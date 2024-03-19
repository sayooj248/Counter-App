import { useState } from 'react'
import CounterMain from './Components/CounterMain'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <CounterMain/>
    </>
  )
}

export default App
