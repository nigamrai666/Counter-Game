import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter,setCounter]=useState(10);

  const increase=()=>{
    if(counter===20){
      exit;
    }
    setCounter(counter+1);
  }

  const decrease=()=>{
    if(counter===0){
      exit;
    }
    setCounter(counter-1);
  }

  const buttonStyles = {
    marginTop: '20px',
    color: 'white',
    backgroundColor: 'blue',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <>
        <h1>Counter Game ( '0' to '20' )</h1>
        <h2>Count is: {counter}</h2>
        <button style={buttonStyles} onClick={increase}>Increament Value</button><br />
        {/* <button style={{marginTop:"20px"}} onClick={decrease}>Decreament Value</button> */}
        <button style={buttonStyles} onClick={decrease}>Decreament Value</button>
    </>
  )
}

export default App
