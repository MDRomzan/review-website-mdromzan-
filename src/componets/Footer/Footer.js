import React from 'react';
import "./Footer.css"
import ReactDom from "react-dom";


const Footer = () => {
    return (
         <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Best Online Course</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                   
                  </div>
                  <div className="icon">
                   
                  </div>
                  <div className="icon">

                  </div>
                  <div className="icon">
                   
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    * The most effective, successful professionals are constantly learning, they take the time to apply what they have learned, and they continually work to improve themselves.” - Joel Gardner.
                  </small>
                </p>

                <p className="mt-5">
                  <small>Zemez © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Course</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Enroll Your Course</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    
                  </div>
                  <div>
                    <h5>+8801786299934</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                   
                  </div>
                  <div>
                    <p>
                      023 Shariatpur, Dhaka,Bangladesh 1200,
                      <br /> Road No.02, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Footer;