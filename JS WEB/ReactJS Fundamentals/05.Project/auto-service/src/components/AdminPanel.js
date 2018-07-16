import React,{Component} from 'react';
import { Route } from 'react-router-dom'
import RPost from './RPost';
import APost from './APost';
import CPost from './CPost';
import UserInfo from './UserInfo';
import {NavLink} from 'react-router-dom';
import '../styles/admin.css';

export default class AdminPanel extends Component{
    render(){
        return(
            <div className="awrapper">
                <div className="ainfo">
                
                    <strong>Hello Admin!</strong>
                    <br/>
                    <img src="https://lh6.googleusercontent.com/sSmmAhPNqpG8w1vT8NEA9T1UDNj1pOoK2t2qsdSjn3VBe4UM-H0aA55BbfV_PYfJ2RymsyBy-0t9-qQM3Nm9=w1920-h948-rw"/>
                    
                </div>
                <div className="roleG">
                <label><strong>All users</strong></label>
                <div className="role">
                <UserInfo />
                </div>
                </div>
                <div className="forms">
                    <Route path="/admin/CPost" component={CPost}/>
                    <Route path="/admin/APost" component={APost}/>
                    <Route path="/admin/RPost" component={RPost}/>
                </div>
                <div className="nwrapper">
                <label><strong>Navigation</strong></label>
                <div className="navigation">
                <div className="nav"><NavLink to="/admin/APost">Add Accessory</NavLink></div>
                <br/>
                <div className="nav"><NavLink to="/admin/CPost">Add Craftsman</NavLink></div>
                <br/>
                <div className="nav"><NavLink to="/admin/RPost">Add Repair</NavLink></div>
                </div>
                </div>
            </div>
        )
    }
}