import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import About from './About.js';
import Contact from './Contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
      </div>
    );
  }
}

export default App;
