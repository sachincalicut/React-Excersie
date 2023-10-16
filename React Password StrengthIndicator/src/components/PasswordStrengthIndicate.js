import React from 'react'
import zxcvbn from 'zxcvbn';

const PasswordStrengthIndicate = ({ password }) => {

    
    const testResult = zxcvbn(password);
    const numb = testResult.score * 100/4;
    const ProgressColor = () =>{
        switch(testResult.score){
            case 0:
            return '#828282';
            case 1:
            return '#EA1111';
            case 2:
            return '#FFAD00';
            case 3:
            return '#9B1158';
            case 4:
            return '#00B500';
            default:
                return 'none';

        }
    }
    const passwordHealth = () => {
        switch(testResult.score){
            case 0:
            return 'Very Weak';
            case 1:
            return 'Weak';
            case 2:
            return 'Good';
            case 3:
            return 'Strong';
            case 4:
            return 'Excellent';
            default:
                return '';

        }
    }
   // console.log(testResult);

    const changePasswordColor = () => ({
        width:`${numb}%`, background: ProgressColor(), height:'8px'
    })

  return (
    <>
    <div className='progress'>
        <div className='progress-bar' style={changePasswordColor()}></div>
     </div>
    <p className='status' style={{ color: ProgressColor() }}>{passwordHealth()}</p>
    </>
  )
}

export default PasswordStrengthIndicate
