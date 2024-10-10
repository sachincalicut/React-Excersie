import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
 
import { userActions } from '../../redux/actions';
 
class Register extends Component {
constructor(props) {
    super(props);
 
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      userName:'',
      submitted : false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
    
  }
 
  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }
 
  submitRegister(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { firstName, lastName, userName, email, password } = this.state;
    if (email && password) {
      this.props.register({firstName, lastName, userName, email, password});
    }
  }
 
  render(){
    const { registering } = this.props;
const { firstName, lastName, userName, email, password, submitted } = this.state;
    return(
 
      <div className="col-md-4 col-md-offset-4">
      <h2 className="text-center">User Registration</h2><form>
      <div className={'form-group' + (submitted && !firstName ? ' has-error' : '')}>
          <label>First Name:</label>
          <input type="text" id="firstName" className="form-control input-shadow" placeholder="Enter First Name" value={this.state.firstName} onChange={this.handleInputChange} name="firstName"/>
                       { submitted && !firstName && <div className="help-block">First Name is required</div> }
      </div>
      <div className={'form-group' + (submitted && !lastName ? ' has-error' : '')}>
          <label>Last Name:</label>
          <input type="text" id="lastName" className="form-control input-shadow" placeholder="Enter Last Name" value={this.state.lastName} onChange={this.handleInputChange} name="lastName"/>
                      { submitted && !lastName && <div className="help-block">Last Name is required</div> }     </div>
      <div className={'form-group' + (submitted && !userName ? ' has-error' : '')}>
          <label>Username:</label>
          <input type="text" id="userName" className="form-control input-shadow" placeholder="Enter user name" value={this.state.userName} onChange={this.handleInputChange} name="userName"/>
                      { submitted && !userName && <div className="help-block">username is required</div> }
      </div>
      <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
          <label>Email:</label>
          <input type="text" id="email" className="form-control input-shadow" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange} name="email"/>
                      { submitted && !email && <div className="help-block">Email is required</div> }
      </div>
      <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
          <label for="password">Password: </label>
          <input type="password" id="password" className="form-control input-shadow" placeholder="Enter Password" value={this.state.password}
          onChange={this.handleInputChange} name="password"/>
          { submitted && !firstName && <div className="help-block">Password is required</div> }
          </div>
          <button type="button" onClick={this.submitRegister} className="btn btn-primary btn-block">Register</button>
      <Link to="/login" className="btn btn-link">Login</Link>
     </form></div>
    )
  }
 
}
 
function mapState(state) {
const { registering } = state.register;
return { registering };
}
 
const actionCreators = {
register: userActions.register
}
 
const connectedRegister = connect(mapState, actionCreators)(Register);
export { connectedRegister as Register };