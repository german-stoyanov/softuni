import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { Route } from 'react-router-dom';
import Notification from './components/common/Notification'

import './styles/site.css'
import './styles/submit.css'
import './styles/post.css'
import './styles/notifications.css'
import './styles/menu.css'
import './styles/header.css'
import './styles/comment.css'
import Header from './components/common/Header';
import PostList from './components/PostList';
import FormPost from './components/FormPost'
import Details from './components/Details'
import Edit from './components/Edit'
import Logout from './components/Logout'
import Map from './components/GoogleMaps'


class App extends Component {
  render() {
    return (
      <div id="app">
      <Header />
      <main className="content">
      <Notification />
      <Route path='/' exact component={Home} />
      <Route path='/logout' exact component={Logout} />
      <Route path='/submitlink' exact component={FormPost} />
      <Route path='/catalog/:id' exact component={Details} />
      <Route path='/edit/:id' exact component={Edit} />
      <Route path='/catalog' exact component={PostList} />
      </main>
      </div>
    );
  }
}

export default App;
