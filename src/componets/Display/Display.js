import React from 'react';
import "./Display.css"
const Display = (props) => {
    console.log(props.home)
    const{couresName,img,price,description}=props.home
    return (
            <div className="col-lg-6 design-home shadow-lg">
                <img className="w-75 rounded-circle d-flex mx-auto" src={img} alt="" />
                <h4 className="text-center">{couresName}</h4>
                <h3 className="text-center">{price}</h3>
                <p className=" style-text text-center">
                    {description}
                </p>
                <button className="about-b d-flex mx-auto">Add to Cart</button>
            </div>

    );
};

export default Display;