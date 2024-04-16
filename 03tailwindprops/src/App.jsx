import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username:"rishab",
    age:21
  }

  let newArr=[1,2,3,4]

  return (
    <>
    <h1 className='bg-green-500 text-black 
    p-4 rou  nded-xl'>Tailwind Test</h1>
   <Card username="RishabKaCode" btnText="click me" />
   <Card username="Rishab" btnText="visit me"/>


          </>
  )
}

export default App
