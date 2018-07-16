import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import observerService from '../infrastructure/observerService';
import requester from '../infrastructure/requester';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      ratings: [],
      rate: 0,
      isRated: false
    };
    observerService.subscribe(observerService.events.loginUser, this.userLoggedIn.bind(this));
    observerService.subscribe('rate',this.rate.bind(this))
    this.handleChange = this.handleChange.bind(this)
    this.addRate = this.addRate.bind(this)
    this.calcA = this.calcA.bind(this);
    this.showRate = this.showRate.bind(this)
  }

  rate(param){
    this.setState({
      isRated: param
    });
  }

  userLoggedIn(username) {
    this.setState({
      username: username
    });
  }

  componentDidMount(){
    requester.get('appdata','ratings','master')
    .then((res)=>{
      let data = res;
      data = data.map(x=>x.value)
      this.setState({ratings:data,isRated: sessionStorage.getItem('isRated')})
    })
    observerService.trigger('rate',sessionStorage.getItem('isRated'))
    observerService.trigger(observerService.events.loginUser,sessionStorage.getItem('username'))
  }

  rendAdP(){
    if(sessionStorage.getItem('id')==='5b49f2f942d5e10709d85607'){
      return (<div className="nav"><NavLink className="link" to="/admin/RPost">Admin Panel</NavLink></div>)
    }
  }

  addRate(){
    let data = this.state.ratings;
    data.push(this.state.rate)
    this.setState({ratings: data})
    let obj = {}
    obj.value = this.state.rate;
    obj.author = sessionStorage.getItem('id')
    requester.post('appdata','ratings','master',obj).then(()=>{
        this.setState({isRated: true})
    })
  }

  handleChange(e){
    this.setState({rate: e.target.value})
  }

  calcA(){
    let data = this.state.ratings;
   
    if(data.length===0){
      data=[]
      return
    }
    let sum = data.reduce((a,b)=>Number(a)+Number(b));
    sum = sum/(data.length);
    return sum.toFixed(2)
  }

  showRate(){
    let islogged = true;
    if(sessionStorage.getItem('id')){
      islogged = false
    }
    let param1 = this.state.isRated;
    if(param1==="false"){
      param1=false
    }
    console.log(islogged)
    if(param1||islogged){
      return null;
    }else{
      return(
        <div className="rate">
        <select onChange={this.handleChange}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <button onClick={this.addRate}>Rate</button>
        </div>
      )
    }
  }
   

  render() {
    const loggedInSection =
      <div id="profile">
        <span>Hello {this.state.username}!   </span>|    <div className="nav"><NavLink className="link" to="/logout">LOGOUT</NavLink></div>
      </div>;
    const unAuthorizedSection = 
    <div id="profile">
        <span>You are currently not logged in! </span>|   <div className="nav"><NavLink className="link" to="/login">LOGIN</NavLink></div>
      </div>;
    return (
      <header id="header">
        
        {this.state.username ? loggedInSection : unAuthorizedSection}
        <div className="nav"><NavLink className="link" to="/accessories">Accessories</NavLink></div>
        <div className="nav"><NavLink className="link" to="/repairs">Repairs</NavLink></div>
        <div className="nav"><NavLink className="link" to="/craftsmen/all">Craftsmen</NavLink></div>
        <div className="nav"><NavLink className="link" to="/contacts">About</NavLink></div>
        {this.rendAdP()}
        <span className="r">AVERAGE RATING: {this.calcA()}</span>
        {this.showRate()}
       
      </header>
    );
  }
}

export default Header;