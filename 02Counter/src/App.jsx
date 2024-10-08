import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  const addValue = () => {   
    if(counter !== 20){
      // counter = counter + 1
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
    
  }
  const decValue = () => {
    if(counter !== 0) {
      counter = counter - 1
      setCounter(counter)
    }
    
  }

  return (
    <>
    <h1>Hello World</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <button onClick={decValue}>Decrease Value {counter}</button>
    <footer>{counter}</footer>
    </>
  )
}

export default App
