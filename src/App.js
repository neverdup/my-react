import React from 'react';
import './App.css';


function App() {
  const [count, SetCount] = React.useState(1)

  function changeCount(event) {
    SetCount(count + Number(event.target.value) )
    console.log(event)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button id="minus" value="-1" onClick={changeCount}>-</button>
      <button id="plus" value="1" onClick={changeCount}>+</button>
    </div>
  );
}

export default App;
