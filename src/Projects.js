import React, { Component } from 'react';
import './App.css';

class Projects extends Component {
  render() {
    return (
    <section className="Projects Padding-style Background-azure" id="project">
        <h2 className="Text text-center Font-header">PROJECTS</h2>

        <div className="Project3 row">
            <div className="Padding-style Sub-text col-xs-12 col-sm-9">
                <h3>Qzam</h3>
                <h4>Responsive quiz application.</h4>
                <p> React JS | Bootstrap | CSS | Javascript | PostgresSQL | AWS | REST API | Responsive</p>
            </div>
            <div className="Padding-style Sub-text col-xs-12 col-sm-3">
                <img className="imageSize center-block" src={require('../public/image/qzam_laptop.png')}/>
            </div>
        </div>

         <div className="Project2 row Background-black">
            <div className="Padding-style Sub-text col-xs-12 col-sm-9">
                <h3>Weatherz</h3>
                <h4>Responsive Weather application.</h4>
                <p> React JS | Bootstrap | CSS | Google Weather API | Responsive</p>
            </div>
            <div className="Padding-style Sub-text col-xs-12 col-sm-3">
                <img className="imageSize center-block" src={require('../public/image/weatherApp.png')}/>
            </div>
        </div>

        <div className="Project1 row">
            <div className="Padding-style Sub-text col-xs-12 col-sm-9">
                <h3>Jukebox</h3>
                <h4>Responsive Music application.</h4>
                <p> Bootstrap | SASS / CSS | Responsive | jQuery</p>
            </div>
            <div className="Padding-style Sub-text col-xs-12 col-sm-3">
                <img className="imageSize center-block" src={require('../public/image/ipad.png')}/>
            </div>
        </div>
    </section>
    );
  }
}

export default Projects;