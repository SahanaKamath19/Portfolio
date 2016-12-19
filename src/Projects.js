import React, { Component } from 'react';
import './App.css';

class Projects extends Component {
  render() {
    return (
    <section className="Projects">

    <div className="Project-2">
            <h3>Title</h3>
            <h4>Description</h4>
            <p> Skills</p>
        </div>
        <div className="Project-1">
            <h3>PSD to Responsive Site</h3>
            <h4>Converting existing PSD design to fully responsive web page.</h4>
            <p> HTML | CSS/SASS | Bootstrap | jQuery</p>
        </div>

    </section>
    );
  }
}

export default Projects;