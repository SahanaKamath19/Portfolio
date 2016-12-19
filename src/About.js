import React, { Component } from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
      <div className="About Padding-style section-margin Background-white" id="about">
      <h2 className="Text Font-header text-center">ABOUT ME</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="profilePhoto img-circle"></div>
          </div>
          <div className="col-sm-9">
              <p>I'm a Junior Web Developer, and a recent graduate from the Web Development Course at Brainstation. Prior to grad school, I worked as a digital QA, and a junior frontend developer for a consulting company.
              </p>
              <p>
              My goal as a web developer is to make people's interaction with technology accessible, intuitive and useful.
              </p>
              <p>
              When I am not developing, you can see me experimenting with cooking, clicking photos, exploring new places and meeting friends 
              </p>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default About;