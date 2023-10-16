
import './App.css';
import {useState } from 'react';
function App() {

const [name, setName] = useState("");

  return (
    <div className="App">
     <input type="text" onChange={(event) =>{
      const value = event.target.value;
      setName(value);
     }}></input>
      {name}
    </div>
   
  );
}

export default App;
