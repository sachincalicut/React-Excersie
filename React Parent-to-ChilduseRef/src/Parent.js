import React, {useRef, useEffect} from 'react';

import Child from './components/Child';

const Parent = () => {
  let childRef = useRef(null);

  const handleColor = color => {
   // console.log(color);
    childRef.current.style.color = color
  }

  useEffect(() => {
    console.log(childRef.current, 'Parent.js');
  })


  return (
    <Child
      forwardedRef={childRef}
      handleColor={handleColor}
      title={'Passing ref'}
    />
  );
}

export default Parent;