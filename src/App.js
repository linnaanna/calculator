import React, { useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber] 
  = useState({nrone: '', nrtwo: ''});

  const [result, setResult] 
  = useState('');

  const inputChanged = (event) => {
    setNumber({...number, [event.target.name]: event.target.value});
    
  }

    const plus = () => {
      setResult(Number(number.nrone) + Number(number.nrtwo));
      
      console.log(result)
      console.log(typeof Number(number.nrone))
    }

    const minus = () => {
      setResult(Number(number.nrone) - Number(number.nrtwo));
      console.log(result)
    }


  return (
    <div className="App">
      Result = {result} <br />
      <input placeholder="First number" name="nrone" value={number.nrone} onChange={inputChanged} />
      <input placeholder="Second number" name="nrtwo" value={number.nrtwo} onChange={inputChanged} />
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default App;
