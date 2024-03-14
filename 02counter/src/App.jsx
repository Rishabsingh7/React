import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]=useState(Math.floor(Math.random()*10))

 // let counter=15;

  const addValue = () => {
    console.log("Clicked",counter)
    //counter=counter+1;
    setCounter(counter+1)
  } 

  const removeValue = () =>{
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Rishab Aur React</h1>
      <h2>Counter value:{counter}</h2>

      <button
      onClick={addValue}
      >Add value </button>
      <button
      onClick={removeValue}
      >Remove value </button>
      {/* <p>footer: {counter}</p> */}

    </>
  )
}

export default App
