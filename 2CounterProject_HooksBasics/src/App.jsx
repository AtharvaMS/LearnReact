import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 14;
  let [counter, setCounter ] = useState(0);

  const addValue = () => {
    if( counter >=0 && counter < 20){
      setCounter(++counter);
    }
  };
  const removeValue = () => {
    if(counter <= 0){
      setCounter(0);
    }else{
      setCounter(--counter)
    }
  };

  return (
    <>
      <h2>This is project to learn hooks in react using counter project</h2>
      <h3>Counter value : {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
