
import './App.css';
import React, {useRef, useState} from 'react';
function App() {
  return (
    <div className="App">
     <h3>Highr Order Component</h3>
        <HocRed cmp={Counter}/>
        <HocGreen cmp={Counter}/>
        <HocYellow cmp={Counter}/>
    </div>
  );
}
function HocRed(props){
  return <h3 style={{backgroundColor:'red', width:100}}>Red<props.cmp/></h3>
}
function HocGreen(props){
  return <h3 style={{backgroundColor:'green', width:100}}>Green<props.cmp/></h3>
}
function HocYellow(props){
  return <h3 style={{backgroundColor:'yellow', width:100}}>Yellow<props.cmp/></h3>
}
function Counter(){
  const [count,setCount]=useState(0)
  return <div>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update Changes</button>
  </div>
}
export default App;
