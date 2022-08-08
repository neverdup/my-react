import React from 'react';
import './App.css';


function App() {
  const [count, SetCount] = React.useState(1)

  function addOne() {
    SetCount(count + 1)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button className="add" onClick={addOne}>Add</button>
    </div>
  );
}

export default App;
