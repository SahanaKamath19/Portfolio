import React, { Component } from 'react';
import './App.css';

class Header extends Component {
constructor()
{
    super();
    this.state={
        display:false
    }
}
  render() {
    return (
    <section className="section-margin">
      <header className="Home Padding-style text-center" id="home">
            <h1 className=" Name Text Font-header">Sahana Kamath</h1>
            <h2 className=" Title Sub-text Font-sub-header">Web Developer</h2>
        </header>

        <nav className="nav-bar" hidden={this.state.display}>
            <a className="Header Text" href="#home">
            <h3 className="scrolling Header">SK</h3>
            </a>
            <ul>
                <li>
                <a href="#about">About Me</a>
                </li>
                <li>
                <a href="#project">Project</a>
                </li>
                <li>
                <a href="#skill">Skills</a>
                </li>
                <li>
                <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    </section>
    );
  }
}

export default Header;