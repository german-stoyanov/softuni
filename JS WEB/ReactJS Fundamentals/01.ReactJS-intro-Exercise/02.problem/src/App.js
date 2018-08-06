import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rerender from './index'

let counter = 0;

let increace = ()=>{
  counter++;
  rerender(App(),document.getElementById('root'))
}

const App = ()=>{
      return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      
          <h2>{counter}</h2>
          <button onClick={increace}>Click</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
} 
  
      



export default App;
