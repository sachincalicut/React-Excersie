import React, {  Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../../redux/actions';
 
class Home extends Component {
 
  render() {
    return (
      <div className="text-center">
        <h2>Login Successful!</h2>
        <h3>Welcome to Home Page</h3>
        <button className="btn btn-primary" onClick={this.getHome}>Home</button>
        <Link className="dropdown-item" to="/login/login">Logout</Link>
      </div>
    )
  }
 
}
 
function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}
 
const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete
}
 
const connectedHome = connect(mapState, actionCreators)(Home);
export { connectedHome as Home };