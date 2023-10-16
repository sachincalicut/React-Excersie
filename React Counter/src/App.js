import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const handleSubtract = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleAddition = () => {
    setCount(count + 1);
  };
  let color = "#fff";
  if(count >= 1){
    color = "red";
  }else 
  if(count < 0){
    color = "blue";
  }else{
    color = "black";
  }
  
  return (
    <div>
      <section className='counter-section'>
        <div className='container counter'>
          <h1>React Counter App</h1>
          <p>{count}</p>
          <div className='button-sm'>
            <button onClick={handleSubtract}>- Subtract</button>
            <button onClick={handleReset}>Clear All</button>
            <button onClick={handleAddition}>+ Addition</button>
          </div>
        </div>
      </section>
    </div>

  );

}

export default App;
