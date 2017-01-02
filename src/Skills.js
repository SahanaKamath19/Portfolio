import React, { Component } from 'react';
import './App.css';

class Skills extends Component {
  render() {
    return (
    <section className="Skills Padding-style section-margin container" id="skill">
         <h2 className="Text text-center Font-header">SKILLS</h2>
         <h3 className="Sub-text Font-sub-header">LANGUAGES I KNOW</h3>
         <div className="Sub-text container-fluid">
                <i className="devicon-html5-plain-wordmark icon"></i>
                <i className="devicon-css3-plain-wordmark icon"></i>
                <i className="devicon-sass-original icon"></i>
                <i className="devicon-bootstrap-plain-wordmark icon"></i>         
                <i className="devicon-javascript-plain icon"></i>            
                <i className="devicon-jquery-plain-wordmark icon"></i>           
                <i className="devicon-nodejs-plain-wordmark icon"></i>     
                <i className="devicon-react-original-wordmark icon"></i>   
                
          </div>  

         <h3 className="Sub-text Font-sub-header section-margin">TOOLS I USE</h3>
         <div className="Sub-text container-fluid">
            <i className="devicon-atom-original-wordmark icon"></i>
            <i className="devicon-postgresql-plain-wordmark icon"></i>
            <i className="devicon-github-plain-wordmark icon"></i>
            <i className="devicon-heroku-original-wordmark icon"></i>
            <i className="devicon-amazonwebservices-plain-wordmark icon"></i>
        </div>

         <h3 className="Sub-text Font-sub-header section-margin">I'AM LEARNING</h3>
            <div className="Sub-text row">
                <i className="devicon-mongodb-plain-wordmark icon col-xs-1"></i>
                <i className="devicon-angularjs-plain-wordmark icon col-xs-1"></i>
                <i className="devicon-wordpress-plain-wordmark icon col-xs-1"></i>
            </div>
    </section>
    );
  }
}

export default Skills;