import { HiPencilAlt } from "react-icons/hi";
import { Col} from 'antd';
const ApplicationSettings = () => {
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
        <h2>Application Setting <HiPencilAlt className="icon-pencil-edit" /></h2>

     </Col>
    </>
     
    
  )
}

export default ApplicationSettings