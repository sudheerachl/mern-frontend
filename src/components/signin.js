import React from 'react';
import Navbar from './navbar';

const Signin = () => {
  return (
      <>
    <div>
    <Navbar />
  
       
        <div className="main">
          <div className="heading">
            <h2>Signin</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4 py-3 py-sm-0">
                <div className="card card-style">
                   <div className="card-body">
                    <h5 className="card-title">Empower others as a compassionate doctor</h5>
                    <p className="card-text"> Are you a licensed therapist or a counselor seeking to make a positive impact on the lives of others? </p>
                    <a href="/signindoctor" className="btn btn-primary">Resume your journey</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 py-3 py-sm-0">
                <div className="card card-style">
                 
                  <div className="card-body">
                    <h5 className="card-title">Share your experiences and find connection.</h5>
                    <p className="card-text">  Join a supportive community of individuals who understand what you're going through.</p>
                   <a href="/signinuser"  className="btn btn-primary">Resume your journey</a>
                  </div>
                </div>
              </div>
               </div>
          </div>
        </div>
            </div>
       </>
  );
};

export default Signin;





