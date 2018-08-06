import React, { Component } from 'react'

export default class RegisterForm extends Component {
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

        fetch('http://localhost:5000/auth/signup',{
            body: JSON.stringify(this.state.userData), 
            headers: {'content-type': 'application/json'},
            method: 'POST'
        }).then(res=>{
            this.props.changeView('login')
            console.log(res)
            
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
                <h1>RegisterForm</h1>
                <div className="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" name="email" onChange={this.handleInput} className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" name="password" onChange={this.handleInput} className="form-control" id="pwd" />
                </div>
                <div className="form-group">
                    <label for="pwd">Name:</label>
                    <input type="password" name="name" onChange={this.handleInput} className="form-control" id="pwd" />
                </div>
                <div>
                <button type="button" className="btn btn-link" onClick={()=>this.props.changeView('login')}>Login</button>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
}