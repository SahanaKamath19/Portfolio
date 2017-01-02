import React, { Component } from 'react';
import './App.css';

class Projects extends Component {
  render() {
    return (
    <section className="Projects Padding-style Background-azure" id="project">
        <h2 className="Text text-center Font-header">PROJECTS</h2>

        <div className="Project4">
            <div className="Padding-style Sub-text">
                <h3>Qzam</h3>
                <h4>Responsive quiz application.</h4>
                <p> HTML | CSS/SASS | Bootstrap | jQuery</p>
            </div>
        </div>

         <div className="row Project-1 container section-margin">
            <h3>PSD to Responsive Site</h3>
            <h4>Converting existing PSD design to fully responsive web page.</h4>
            <p> HTML | CSS/SASS | Bootstrap | jQuery</p>
        </div>

    </section>
    );
  }
}

export default Projects;