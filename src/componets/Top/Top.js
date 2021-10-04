import React,{useState,useEffect} from 'react';
import Display from '../Display/Display';
import "./Top.css"
const Top = () => {
    const [homes,setHome]=useState([]);
    useEffect(()=>{
        fetch("/homeUi.json")
        .then(res =>res.json())
        .then(data =>setHome(data))
    },[])
    return (
        <div>
            <div className="row d-flex gx-5 gy-5 mx-5 my-5">
                 {
               homes.map(home =><Display home={home}
                key={home.id}
               >

               </Display>)
           }
            </div>
          
        </div>
    );
};

export default Top;