import { useState } from 'react'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>This is react with tailwind css. Components and hooks basics!</h2>
     <Card cardName = "Ape with CAP!" cardPrice = "0.05 Eth"/>
     <Card cardName = "Ape with Modern Cap!" cardPrice = "1.00 Eth"/>
     <Card cardName = "Ape with wierd Look" cardPrice = "0.07 Eth"/>
     
    </>
  )
}

export default App
