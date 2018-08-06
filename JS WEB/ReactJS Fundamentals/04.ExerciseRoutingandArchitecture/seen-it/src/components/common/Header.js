import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import observerService from '../../infrastructure/observerService';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };

   
    observerService.subscribe(observerService.events.loginUser, this.userLoggedIn.bind(this));
  }

  userLoggedIn(username) {
    this.setState({
      username: username
    });
  }

  componentDidMount(){
    
    observerService.trigger(observerService.events.loginUser,sessionStorage.getItem('username'))
  }

   

  render() {
    const loggedInSection =
      <div id="profile">
        <span>{this.state.username}</span>|<Link to="/logout" >logout</Link>
      </div>;
    return (
      <header>
        <span className="logo">☃</span><span className="header">SeenIt</span>
        {this.state.username ? loggedInSection : null}
      </header>
    );
  }
}

export default Header;