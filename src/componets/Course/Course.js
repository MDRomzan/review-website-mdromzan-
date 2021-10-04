import React from 'react';
import "./Course.css"
const Course = (props) => {
    console.log(props.course);
    const{couresName,img,price,description}=props.course
    
    return (
        <div className="col-lg-4 course-design shadow-lg">
            <img className=" rounded-pill  w-100 d-flex mx-auto" src={img} alt="" />
            <h4 className="text-center">{couresName}</h4>
            <h5
             className="text-center">price:{price}</h5>
            <p className="text-center"> {description.slice(0,150)}</p>
            <button className=" button about-b d-flex mx-auto  ">Add to Cart</button>
        </div>
    );
};

export default Course;