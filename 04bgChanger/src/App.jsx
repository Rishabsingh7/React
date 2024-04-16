import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(Math.floor(Math.random()*100))

  const addValue =()=>{
    //setCounter(counter+1)
    setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    
  }

  const removeValue =()=>{
    setCounter(counter-1)
  }

  return (
    <><h1>Rishab With Code</h1>
    <h2>Counter value:{counter}</h2>


    <button
    onClick={addValue}
    >Add value<br/></button>
     
    <button
    onClick={removeValue}
    >Remove value</button>

    <p>footer</p>
     





           </>
  )
}

export default App
