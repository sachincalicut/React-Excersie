
import { useState } from 'react';
import './App.css';
import PasswordStrengthIndicate from './components/PasswordStrengthIndicate';
function App() {
  const [password, setPassword ] = useState('');
  //console.log(password);



  return (

    <div className="App">
     

      <div className='container'>
        <div className='col-md-6 mx-auto'>
          <h3 className='my-4 text-center'>React Password Strength Validator</h3>
          <div className='form-group'>
            <input type='password' className='form-control shadow-none' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
            <PasswordStrengthIndicate password={password}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
