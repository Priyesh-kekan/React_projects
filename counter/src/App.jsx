import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  //let counter  = 5

  const addValue  = () => {
    //console.log("clicked" , counter);
    //counter = counter + 1;
    if(counter == 20){
      setCounter(20)
    }else{
      setCounter(counter + 1)
    }
  } 
  const decValue  = () => {
    //counter = counter - 1;
    //console.log("clicked" , counter);
    if(counter == 0){
      setCounter(0)
    }else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Hello World </h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={decValue}>Decrement</button>
    </>
  )
}

export default App
