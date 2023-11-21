import React from 'react';
import Navbar from './navbar';

const Signup = () => {
  return (
      <>
    <div>
    <Navbar />
  
       
        <div className="main">
          <div className="heading">
            <h2>Blogs</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4 py-3 py-sm-0">
                <div className="card card-style">
                   <div className="card-body">
                    <h5 className="card-title">Empower others as a compassionate doctor</h5>
                    <p className="card-text"> Are you a licensed therapist or a counselor seeking to make a
          positive impact on the lives of others? Join our platform and connect
          with individuals in need of your expertise and support. As a doctor,
          you can provide a safe and confidential space for individuals to share
          their experiences, develop coping mechanisms, and find renewed hope.</p>
                    <a href="/signupdoctor" className="btn btn-primary">Join now</>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 py-3 py-sm-0">
                <div className="card card-style">
                 
                  <div className="card-body">
                    <h5 className="card-title">Share your experiences and find connection.</h5>
                    <p className="card-text">  Join a supportive community of individuals who understand what you're
          going through. In this open and non-judgmental environment, you can
          express your feelings, share your experiences, and find comfort in
          knowing that you're not alone. Together, you can uplift each other and
          find strength in shared understanding.</p>
                   <a href="/signupuser"  className="btn btn-primary">Join Now</>
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

export default Signup;





