import React, { Component } from 'react';
import './App.css';

class Contact extends Component {
  render() {
    return (
      <div className="About section-margin Background-black" id="contact">
        <div className="container">
            <div className="row section-margin">
                <div className="col-sm-5">
                <h2 className="Sub-text Font-header text-center">CONTACT</h2>

                </div> 
                
                <div className="col-sm-7">
                    <div className="form-group form-elements">
                        <div className="col-sm-3 form-label Label">
                            <label for="Name">Your Name:</label>
                        </div>
                        <div className="col-sm-9">
                            <input type="text" className="form-control fields" id="Name" placeholder="E.g. John Doe"/>
                        </div>
                    </div>
                    <div className="form-group form-elements">
                        <div className="col-sm-3 form-label Label">
                            <label for="Email">Your Email:</label>
                        </div>
                        <div className="col-sm-9">
                            <input type="email" className="form-control fields" id="Email" placeholder="E.g. John_Doe@email.com"/>
                        </div>
                    </div>
                    <div className="form-group form-elements">
                        <div className="col-sm-3 form-label Label">
                            <label for="message">Message:</label>
                        </div>
                        <div className="col-sm-9">
                            <textarea className="form-control fields" id="Message" placeholder="E.g. Your message to me"></textarea>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
      </div>
    );
  }
}

export default Contact;