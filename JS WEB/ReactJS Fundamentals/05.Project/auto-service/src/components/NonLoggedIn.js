import React,{Component} from 'react'
import LoginForm from './user/LoginForm';
import RegisterForm from './user/RegisterForm';
import Welcome from './Welcome'
import Footer from './Footer'
import '../styles/sign-up.css'

export default class NonLoggedIn extends Component {
    render(){
        return (
            
            <div id="wrapper">
            <Welcome />
            <div id="sign-up">
                <LoginForm {...this.props}/>
                <RegisterForm {...this.props}/>
            </div>
            </div>
            
            
        )
    }
}