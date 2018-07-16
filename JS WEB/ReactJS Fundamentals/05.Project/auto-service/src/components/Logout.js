import React,{Component} from 'react';
import requester from '../infrastructure/requester';
import observerService from '../infrastructure/observerService';
import notify from '../infrastructure/notify';

export default class Logout extends Component{
    componentDidMount(){
        requester.post('user','_logout','kinvey').then((res)=>{
            notify('success','Logout Successful')
            sessionStorage.clear();
       
            observerService.trigger('loginUser',sessionStorage.getItem('username'))
            this.props.history.push('/login')
        })
        
    }

    render(){
        return null
    }
}