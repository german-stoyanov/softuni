import React, { Component } from 'react';

import observerService from '../../infrastructure/observerService';
import requester from '../../infrastructure/requester'

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFormSubmit(e) {
        e.preventDefault();


        requester.post('user', '', 'basic', this.state).then((res)=>{
            sessionStorage.setItem('authtoken',res._kmd.authtoken)
            sessionStorage.setItem('username',res.username)
            observerService.trigger(observerService.events.loginUser, res.username);
            observerService.trigger(observerService.events.notification, {type: 'success', message: 'Logged in Successfully!'});
            this.props.history.push('/catalog');
         }).catch((err)=>{
            observerService.trigger(observerService.events.notification, {type: 'error', message: 'Invalid Credentials!'});
         })
}

  render() {
    return (
      <form id="registerForm" onSubmit={this.handleFormSubmit}>
        <h2>Sign Up</h2>
        <label>Username:</label>
        <input onChange={this.handleChange} name="username" type="text" />
        <label>Password:</label>
        <input onChange={this.handleChange} name="password" type="password" />
        <input id="btnLogin" type="submit" value="Sign Up" />
      </form>
    );
  }
}

export default RegisterForm;