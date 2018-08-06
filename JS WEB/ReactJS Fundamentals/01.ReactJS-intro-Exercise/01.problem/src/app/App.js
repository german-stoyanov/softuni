import React, { Component } from 'react';
import contacts from './contacts.json'
import './style/app.css';
import rerender from '../index';
let indexOfSelected = 0;

const click = (index)=>{
    indexOfSelected = index;
    rerender(App(), document.getElementById('root'))
}

const renderContacts = ()=>{
    let result = [];
    for(let contact of contacts){
        let index = result.length;
        result.push(<div className="contact" data-id={index} onClick={()=>click(index)}>
        <span className="avatar small">&#9787;</span>
        <span className="title">{contact.firstName} {contact.lastName}</span>
    	</div>)
    }
  
    return result
}

const renderDetails = (index)=>{
    let data = contacts[Number(index)]
        return <div className="content">
                <div className="info">
                    <div className="col">
                        <span className="avatar">&#9787;</span>
                    </div>
                    <div className="col">
                        <span className="name">{data.firstName}</span>
                        <span className="name">{data.secondName}</span>
                    </div>
                </div>
                <div className="info">
                    <span className="info-line">&phone; {data.phone}</span>
                    <span className="info-line">&#9993; {data.email}</span>
                </div>
            </div>
}

const App = ()=>{
 return <div className="container">
 <header>&#9993; Contact Book</header>
 <div id="book">
     <div id="list">
         <h1>Contacts</h1>
         <div className="content">
             {renderContacts()}
         </div>
     </div>
     <div id="details">
         <h1>Details</h1>
         {renderDetails(indexOfSelected)}
         
     </div>
 </div>
 <footer>Contact Book SPA &copy; 2017</footer>
 </div>
}
    
  


export default App;
