import React, { useState } from "react";
import Sum from "./Sum";
import './App.css';


function App() {

  const [value1, setValue1] = useState()
  const [value2, setValue2] = useState()
  const [result, setresult] = useState()


  function add() {
    setresult(Number(value1) + Number(value2));
    console.log(value1,value2)
    
  };
  function sub() {
    setresult(value1 - value2);
  };
  function multi() {
    setresult(value1 * value2);
  };
  function divide() {
    setresult(value1 / value2);
  };



  return (
    <div className="App">

        <Sum/>

      <input
        type="number"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />

      <input
        type="number"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />

      <button onClick={add}>
        Add
      </button>
      <button onClick={sub}>
        sub
      </button>
      <button onClick={multi}>
        multi
      </button>
      <button onClick={divide}>
        divide
      </button>
      <h2> {result}</h2>
    </div>
  );
}

export default App;
