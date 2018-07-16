import React, { Component } from 'react';

import observerService from '../../infrastructure/observerService';
import requester from '../../infrastructure/requester'
import notify from '../../infrastructure/notify'

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      repeatPassword: ''
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

        if(this.state.repeatPassword!==this.state.password){
            notify('error','Password must match!')
            return
        }
        let userData = {}
        userData.username = this.state.username;
        userData.password = this.state.password;
        userData.isRated = false;
        
        requester.post('user', '', 'basic', userData).then((res)=>{
            sessionStorage.setItem('isRated',false)
            sessionStorage.setItem('authtoken',res._kmd.authtoken)
            sessionStorage.setItem('username',res.username)
            sessionStorage.setItem('id',res._id)
            notify('success','Register Successful!');
            observerService.trigger(observerService.events.loginUser, res.username);
            observerService.trigger('rate',false)
            if(this.state.username==="admin"){
              this.props.history.push('/admin/RPost');
            }else{
              this.props.history.push('/repairs');
            }
         }).catch((err)=>{
             console.log(err)
            notify('error','Error Ocured!');
         })
}

  render() {
    return (
      <form id="RegisterForm" onSubmit={this.handleFormSubmit}>
        <h2>Sign Up</h2>
        <label>Username:</label>
        <br />
        <input onChange={this.handleChange} name="username" type="text" />
        <br />
        <label>Password:</label>
        <br />
        <input onChange={this.handleChange} name="password" type="password" />
        <br />
        <label>Repeat Password:</label>
        <br />
        <input onChange={this.handleChange} name="repeatPassword" type="password" />
        <br />
        <input id="btnRegister" type="submit" value="Sign Up" />
      </form>
    );
  }
}

export default RegisterForm;