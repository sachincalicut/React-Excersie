import { Col } from 'antd';
import { HiPencilAlt } from "react-icons/hi";
const AccountSettings = () => {
  return (
    <>
    
      <Col xs={{
        span: 24,
        offset: 1,
      }}
      lg={{
        span: 12,
        offset: 0,
      }}
    >
      <h2>Account Setting <HiPencilAlt  className='icon-pencil-edit'/></h2>
      </Col>
      
    
    </>
  )
}

export default AccountSettings