import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
    <section>
    <header>
        <a className="Header Text" href="#home">
        <h3>SK</h3>
        </a>
    </header>
      <section className="Home text-center" id="home">
            <h1 className=" Name Text">Sahana Kamath</h1>
            <h2 className=" Title Sub-text">Web Developer</h2>
        </section>
    </section>
    );
  }
}

export default Header;