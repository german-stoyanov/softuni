import React, { Component } from 'react';

import observerService from '../../infrastructure/observerService';
import requester from '../../infrastructure/requester'
import notify from '../../infrastructure/notify'

class LoginForm extends Component {
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


        requester.post('user', 'login', 'basic', this.state).then((res)=>{
          let userId = res._id;
            requester.get('appdata','ratings','master')
              .then((res)=>{
                let br = res.filter(x=>x.author===userId)
                
                if(br.length!==0){
                  sessionStorage.setItem('isRated',true)
                  observerService.trigger('rate', true);
                }else{
                  sessionStorage.setItem('isRated',false)
                  observerService.trigger('rate', false);
                }
                if(this.state.username==="admin"){
                  this.props.history.push('/admin/RPost');
                  
                }else{
                  this.props.history.push('/repairs');
                 
                }
              })
              
            
            sessionStorage.setItem('authtoken',res._kmd.authtoken)
            sessionStorage.setItem('username',res.username)
            sessionStorage.setItem('id',res._id)
            notify('success','Login Successful!');
            observerService.trigger(observerService.events.loginUser, res.username);
           
            
         }).catch((err)=>{
            console.log(err);
            notify('error','Invalid Credentials!');
         })
}

  render() {
    return (
      <form id="LoginForm" onSubmit={this.handleFormSubmit}>
        <h2>Sign In</h2>
        <label>Username:</label>
        <br />
        <input onChange={this.handleChange} name="username" type="text" />
        <br/>
        <label>Password:</label>
        <br />
        <input onChange={this.handleChange} name="password" type="password" />
        <br />
        <input id="btnLogin" type="submit" value="Sign In" />
      </form>
    );
  }
}

export default LoginForm;