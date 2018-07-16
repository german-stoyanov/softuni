import React,{Component} from 'react';

export default class SingleUser extends Component{
    constructor(props){
        super(props);

        this.banUser = this.banUser.bind(this)
    }

    banUser(){
        this.props.removeUser(this.props._id)
    }

    render(){
        return(
            <div id="user">
            <strong className="username">Username - {this.props.username}</strong>
            <br/>
            <span>Have been user since {new Date(this.props._kmd.ect).toLocaleString()}</span>
            <br/>
            <button onClick={this.banUser}>Ban</button>
            </div>
        )
    }
}