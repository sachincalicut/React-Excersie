import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions';
 
class Login extends Component {
  constructor(props) {
    super(props);
    this.props.logout();
    this.state = {
      email: '',
      password: '',
      submitted: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    
  }
 
  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }
 
  submitLogin(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  }
 
  render(){
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    return(
      <div className="col-md-4 col-md-offset-4">
        <h2 className="text-center">User Login</h2>
          <form name="form">
            <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
              <label for="email">Email:</label>
              <input type="text" id="email" className="form-control input-shadow" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange} name="email"/>
              {submitted && !email && <div className="help-block">Email is required</div> }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label>Password: </label>
              <input type="password" id="exampleInputPassword" className="form-control input-shadow" placeholder="Enter Password" value={this.state.password} onChange={this.handleInputChange} name="password"/>
              {submitted && !email && <div className="help-block">Password is required</div> }
            </div>
            
            <button type="button" onClick={this.submitLogin} className="btn btn-primary btn-block">Sign In</button>
            <Link to="/register" className="btn btn-link">Register</Link>
          </form>
       </div>
    
    )
  }
}
function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}
 
const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};
 
const connectedLoginPage = connect(mapState, actionCreators)(Login);
export { connectedLoginPage as Login };
 