import React,{Component} from 'react'
import SingeUser from './SingleUser'
import requester from '../infrastructure/requester';
import notify from '../infrastructure/notify';

export default class UserInfo extends Component{

    constructor(props){
        super(props);

        this.state={
            users:[]
        }

        this.removeUser = this.removeUser.bind(this)
    }

    componentDidMount(){
        requester.get('user','','kinvey').then((res)=>this.setState({users: res}))
    }

    removeUser(id){
        let data = this.state.users;
        let user = data.filter(x=>x._id===id)[0]
        let index = data.indexOf(user)
        data.splice(index,1)
        this.setState({data})
        requester.remove('user',`${id}?hard=true
        `,'kinvey').then((res)=>{
            notify('success','user removed successfully')
        }).catch((err)=>{
            notify('error','user removed unsuccessfully')
        })
    }

    rendUser(){
        let users = this.state.users;
        users = users.filter(x=>x.username!=='admin')
        users = users.map(u=><SingeUser key={u._id} removeUser={this.removeUser} {...u}/>)
        if(users.length===0){
            users=<strong>There are currently no users!</strong>
        }
        return users
    }

    render(){
        return(
            <div id="users">
                {this.rendUser()}
            </div>
        )
    }
}