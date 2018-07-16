import React,{Component} from 'react'
import LoginForm from './user/LoginForm';
import RegisterForm from './user/RegisterForm';


export default class Welcome extends Component {
    render(){
        return (
            <div id="welcome">
                <img src="http://serviz-adress.com/wp-content/uploads/2016/10/mobileAutoService.png" alt="some"></img>
                <div id="text">
                <h1>WELCOME TO THE HEAVEN!</h1>
                <h2>AUTO-SERVICE IS HERE TO SATISFY YOUR CAR WISHES!</h2>
                <span>YOU ARE CURRENTLY NOT LOGGED IN. PLEASE LOG IN SO THAT YOU CAN EXPERIENCE OUR AMAZING SERVICE.</span>
                </div>
            </div>
        )
    }
}