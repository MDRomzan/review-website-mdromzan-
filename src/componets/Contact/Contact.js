import React from 'react';
import "./Contact.css"
import ReactDOM from 'react-dom'


const Contact = () => {
    return (
        <div>
            <h2 className="text-center">This is Our Contact us</h2>
            <hr />
            <div className="row d-flex mx-5 contact-us ">
              <div className="col-md-4 contact email">
                <h2 className="text-center">

                     E-mail
                      < hr/>
                </h2>
                <p className="text-center">
                    mdromjan483@gmail.com
                </p>
               

              </div>
              <div className="col-md-4 contact phone-p">
                <h2 className="text-center">
                 Phone
                 < hr/>
                </h2>
                <p className="text-center">
                    
                        +8801786299934
                   
                </p>

              </div>
              
            <div className="col-md-4 contact address">
                <h2 className="text-center">
                      Address
                      <hr/>
                </h2>
                <p className="text-center">
                    Gulsan #01
                </p>
                <p className="text-center">Dhaka,Bangladesh</p>
              </div>
            </div>
        </div>
    );
};

export default Contact;