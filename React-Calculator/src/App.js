import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

function App() {
      // Additions
const [number, setNumber] = useState(0);
const [number2, setNumber2] = useState(0);
const [result1, setResult1] = useState(0);
      const addition = () => {
        setResult1(number + number2)
      }
      // Multiply
const [num1, setNum1] = useState(0);
      const [num2, setNum2] = useState(0);
      const [result2, setResult2] = useState(0);
      const multiply = () => {
        setResult2(num1 * num2);
      };

      // Subtract
      const [num3, setNum3] = useState(0);
      const [num4, setNum4] = useState(0);
      const [result3, setResult3] = useState(0);

      // Function to handle the subtraction
      const handleSubtraction = () => {
        const subtractionResult = num3 - num4;
        setResult3(subtractionResult);
      };


  return (
    <div className="App">
 
      <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
          <div className='card '>
            <div className='card-header'>
              <h4>Addition Numbers</h4>
              
            </div>
            <div className='card-body'>
            <h2 className='text-center'>Result: {result1}</h2>
            <div className='form-group'>
          <label className='form-label'>First Number</label>
              <input type="number" value={number} placeholder="" className="form-control" onChange={e => setNumber(+e.target.value)}/>
          </div>
          <div className='form-group'>
          <label className='form-label'>Second Number</label>
        <input type="number" value={number2} placeholder="" className="form-control" onChange={e => setNumber2(+e.target.value)}/>
          </div>
            </div>
            <div className='card-footer'>
            <button onClick={addition} className='btn btn-sm btn-primary'>Add Number</button>
            
            </div>

          </div>
          
       
        </div>
        <div className='col-md-6'>
        <div className='card '>
            <div className='card-header'>
            <h4>Multiply Numbers</h4>
            </div>
            <div className='card-body'>
            <h2 className='text-center'>Result: {result2}</h2>
            <label className='form-label'>Second Number</label>
            <input
            type="number"
            placeholder=""
            value={num1}
            onChange={(e) => setNum1(parseFloat(e.target.value))}
            className='form-control'
          />
          <label className='form-label'>Second Number</label>
          <input
            type="number"
            placeholder=""
            value={num2}
            onChange={(e) => setNum2(parseFloat(e.target.value))}
            className='form-control'
          />
            </div>
            <div className='card-footer'>
            <button onClick={multiply} className='btn btn-sm btn-primary'>Multiply Number</button>
            </div>
            </div>
       
          </div>
          <div className='col-md-6'>
        <div className='card '>
            <div className='card-header'>
            <h4>Subtract Numbers</h4>
            </div>
            <div className='card-body'>
            <h2 className='text-center'>Result: {result3}</h2>
            <div className='form-group'>
            <label className='label'>First Number</label>
          <input
            type="number"
            className='form-control'
            placeholder=''
            value={num3}
            onChange={(e) => setNum3(Number(e.target.value))}
          />
            </div>
              <div className='form-group'>
              <label className='label'>Second Number</label>
          <input
            type="number"
            className='form-control'
            placeholder=''
            value={num4}
            onChange={(e) => setNum4(Number(e.target.value))}
          />
              </div>
            </div>
            <div className='card-footer'>
            <button className='btn btn-sm btn-primary' onClick={handleSubtraction}>Subtract Number</button>
            </div>
        </div>
        </div>
     
          
          </div>
          </div>
    </div>
 
  );
}

export default App;
