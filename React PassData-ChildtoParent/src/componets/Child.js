import React from 'react'

const Child = (props) => {
  const user = {
    name: 'Sachin',
    email: 'sachisavera@gmail.com',
  }
  const onClick = () => {
    props.sendData(user)
  }
  return (
    <div>
      <button onClick={onClick}>Click Here</button>
    </div>
  )
}
export default Child