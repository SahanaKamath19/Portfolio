import React, { Component } from 'react';
import './App.css';

class Skills extends Component {
  render() {
    return (
    <section className="Skills Padding-style section-margin container" id="skill">
         <h2 className="Text text-center Font-header">SKILLS</h2>
         <h3 className="Sub-text Font-sub-header">LANGUAGES I KNOW</h3>
         <div className="section-margin">
                <i className="devicon-html5-plain-wordmark"></i>
                <i className="devicon-css3-plain-wordmark"></i>
                <i className="devicon-sass-original"></i>
                <i className="devicon-bootstrap-plain-wordmark"></i>         
                <i className="devicon-javascript-plain"></i>            
                <i className="devicon-jquery-plain-wordmark"></i>           
                <i className="devicon-nodejs-plain-wordmark"></i>     
                <i className="devicon-react-original-wordmark"></i>   
                
          </div>  

         <h3 className="Sub-text Font-sub-header">TOOLS I USE</h3>
         <div className="section-margin">
            <i className="devicon-atom-original-wordmark"></i>
            <i className="devicon-postgresql-plain-wordmark"></i>
            <i className="devicon-github-plain-wordmark"></i>
            <i className="devicon-heroku-original-wordmark"></i>
            <i className="devicon-amazonwebservices-plain-wordmark"></i>
        </div>

         <h3 className="Sub-text Font-sub-header">I'AM LEARNING</h3>
            <div className="section-margin">
                <i className="devicon-mongodb-plain-wordmark"></i>
                <i className="devicon-angularjs-plain-wordmark"></i>
                <i className="devicon-wordpress-plain-wordmark"></i>
            </div>
    </section>
    );
  }
}

export default Skills;