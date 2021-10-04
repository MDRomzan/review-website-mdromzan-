import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";
const Header = () => {
    return (
        <div className="banner"> 
            <Navbar/>
            <div className="banner-container">
                <div className="container">
                    <div className="row  d-flex align-items-center justify-content-center">
                       <div className="col-md-6">
                            <h1 className="title">Best Online Course <br/><span className="design">Future Skills</span> Development your Career</h1>
                            <p className="dec">The most effective, successful professionals are constantly learning, they take the time to apply what they have learned, and they continually work to improve themselves.” - Joel Gardner
</p>
                            <button className="  about-btn"> Learn More</button>
                        </div> 
                    <div className="col-md-6">
                        
                     </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;