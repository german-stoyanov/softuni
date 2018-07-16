import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/user/LoginForm';
import { Route } from 'react-router-dom'
import RegisterForm from './components/user/RegisterForm';
import NonLoggedIn from './components/NonLoggedIn'
import Header from './components/Header'
import Footer from './components/Footer'
import Logout from './components/Logout'
import APost from './components/APost'
import RPost from './components/RPost'
import CPost from './components/CPost'
import UserInfo from './components/UserInfo'
import Accessories from './components/Accessories'
import Details from './components/Details'
import EditA from './components/EditA';
import Repairs from './components/Repairs';
import Comments from './components/Comments'
import DetailsR from './components/DetailsR';
import EditR from './components/EditR'
import Craftsman from './components/Craftsmen'
import AdminPanel from './components/AdminPanel';
import GoogleMaps from './components/GoogleMaps';
import Contacts from './components/Contacts';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <Route path="/contacts" component={Contacts}/>
        <Route path="/admin" component={AdminPanel}/>
        <Route path='/craftsmen/:id' component={Craftsman}/>
        <Route path='/editR/:id' exact component={EditR}/>
        <Route path='/detailsR/:id' exact component={DetailsR}/>
        <Route path='/login' exact component={NonLoggedIn}/>
        <Route path='/repairs' exact component={Repairs}/>
        <Route path='/details/:id' component={Details}/>
        <Route path='/editA/:id' component={EditA}/>
        <Route path='/accessories' exact component={Accessories}/>
        <Route path='/logout' exact component={Logout}/>
        <Footer />
      </div>
    );
  }
}

export default App;
