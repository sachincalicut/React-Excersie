import React, {useEffect} from 'react';

const Child = ({forwardedRef, title, handleColor}) => {
    useEffect(() => {
        console.log(forwardedRef.current, 'Child.js')
    }, [])

    return(
        <>
            <p   onClick={() => {
                    handleColor('red')
                }} ref={forwardedRef}> {title}</p>
            
              
             
         
        </>
    )
}

export default Child