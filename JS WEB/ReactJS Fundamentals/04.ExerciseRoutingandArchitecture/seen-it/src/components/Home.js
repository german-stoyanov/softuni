import React, { Component } from 'react';
import LoginForm from './user/loginForm';
import RegisterForm from './user/registerForm';
import About from './About';

export default class Home extends Component{
    render() {
        return (
            
            <section id="viewSignIn">
            <div id="welcome">
            <div id="signup">
            <LoginForm {...this.props} />
            <RegisterForm {...this.props}/>
            </div>
            <About />
            </div>
            </section>
            
        )
    }
}