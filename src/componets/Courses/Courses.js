import React, {useEffect,useState} from 'react';
import Course from '../Course/Course';
import "./Courses.css"
const Courses = () => {

  const [courses,setCourse]=useState([])
   useEffect(() => {
       fetch("/couresData.json")
           .then(res => res.json())
           .then(data=> setCourse(data))
   }, []);
   console.log(courses)
    return (
        <div>
            <div className="row  gx-5 gy-5 mx-3 p-3">
                {
               courses.map(course =><Course course={course} key={course.id}>

               </Course>)
           }
            </div>
           
        </div>
    );
};

export default Courses;