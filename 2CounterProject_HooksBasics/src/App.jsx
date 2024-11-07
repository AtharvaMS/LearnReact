import { useState } from 'react'
import './App.css'

function App() {
  let counter = 14;

  const addValue = ()=>{console.log(counter++)}
  const removeValue = ()=>{console.log(counter--)}

  return (
    <>
     <h2>This is project to learn hooks in react using counter project</h2>
     <h3>Counter value : {counter}</h3>
     <button onClick={addValue}>Add Value</button>
     <br/>
     <br/>
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
