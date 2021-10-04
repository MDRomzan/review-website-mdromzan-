import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import logo from "../../images/logo.png"
const Navbar = () => {
    return (
        <div className="Navbar-container  p-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo-img">
                            <img className=" rounded-3 w-25" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container">
                            <ul className="d-flex align-items-end justify-content-end">
                                <NavLink to="/home" className="items" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                                }}>
                                Home
                                </NavLink>
                                <NavLink to="/course" className="items" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>
                                All Course
                                </NavLink>
                                <NavLink to="/about" className="items" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>
                                About us
                                </NavLink>
                                
                                < NavLink to = "contact"
                                className = "items"
                                activeStyle = {
                                    {
                                        fontWeight: "bold",
                                        color: "red"
                                    }
                                } >
                                Contact us
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    //    
           
    );
};

export default Navbar;