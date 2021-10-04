import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css"
const NotFound = () => {
    return (
        <div className="mt-5">
            < div className = "" >
                <h1 className=" text-center notNumber">404</h1>
            <h3 className=" notText text-center">Not Found</h3>
            <Link className="l-lik" to="/home">
               <button className=" d-flex mx-auto my-5 about-btn  ">Back to Home</button>             
            </Link>

            </div>
            
        </div>
    );
};

export default NotFound;