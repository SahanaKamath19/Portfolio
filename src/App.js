import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Projects from './Projects.js';
import Skills from './Skills.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Projects/>
      <Skills/>
      </div>
    );
  }
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
