import ProfileHighlight from '../ProfileHighlight/ProfileHighlight';
import AccountSettings from '../AccountSettings/AccountSettings';
import ApplicationSettings from '../ApplicationSettings/ApplicationSettings';
import { Row } from 'antd';
const Dashboard = () => {
  return (
    <>
    <ProfileHighlight/>
    <Row>
    <AccountSettings/>
    <ApplicationSettings/>
    </Row>
  
    </>
  )
}

export default Dashboard