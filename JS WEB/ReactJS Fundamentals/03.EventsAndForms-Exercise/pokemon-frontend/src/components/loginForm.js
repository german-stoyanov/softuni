import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            userData:{
                password: null,
                email: null
            }
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.userData)

        fetch('http://localhost:5000/auth/login',{
            body: JSON.stringify(this.state.userData), 
            headers: {'content-type': 'application/json'},
            method: 'POST'
        }).then(res=>res.json()).then(res=>{
            this.props.changeView('HomePage')
            console.log(res)
            if(res.success){
                sessionStorage.setItem('token',res.token)
            }
        })
    }

    handleInput(e){
        let user = this.state.userData
        user[e.target.name] = e.target.value;

        this.setState({
            user
        })

    }

    render () {
        return (
           
            <form onSubmit={this.handleSubmit}>
                <h1>LoginForm</h1>
                <div className="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" name="email" onChange={this.handleInput} className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" name="password" onChange={this.handleInput} className="form-control" id="pwd" />
                </div>
                <div>
                <button type="button" className="btn btn-link" onClick={()=>this.props.changeView('register')}>Register</button>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
}