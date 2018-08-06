import React, { Component } from 'react';
import logo from './logo.svg';
import LoginForm from './components/loginForm'
import RegisterForm from './components/registerForm'
import HomePage from './components/loggedIn.js/HomePage'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      route: ""
    }

    this.changeView = this.changeView.bind(this)

  }

  views (){
    if(sessionStorage.getItem('token')){
      return <HomePage />
    }
    else if(this.state.route==="HomePage"){
      return <HomePage />
    }
    else if(this.state.route==="register")
    {
      return <RegisterForm changeView={this.changeView}/>
    }
    else if(this.state.route==="login"){
      return  <LoginForm changeView={this.changeView}/>
    }
    
    return  <LoginForm changeView={this.changeView}/>
  }

  changeView (view) {
    this.setState({route: view})
  }

  render() {
    return (
      <div className="App">
        {this.views()}
      </div>
    );
  }
}

export default App;
