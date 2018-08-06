import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import observerService from '../infrastructure/observerService';

export default class Logout extends Component{
    componentDidMount(){
        sessionStorage.clear();
        observerService.trigger('loginUser',sessionStorage.getItem('username'))
    }

    render(){
        return(
            <Redirect to='/' />
        )
    }
}