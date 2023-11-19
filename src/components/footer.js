import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3>Welcome at Mind Heaven</h3>
              <hr />
            </div>
            <div className="col-md-3">
              <img className="img-fluid" src="logo.png" alt="" />
            </div>
            <div className="col-md-9">
              <p style={{ fontSize: 'large' }}>
                Our website addresses Mental Health Issues and the need to be aware of it. Our website aims at helping people
                get rid of their psychological problems by introspecting and understanding themselves through mental health assessments,
                online chatrooms, and curated blogs.
              </p>
              <p style={{ fontSize: 'large' }}>
                It also focuses on building a community where like-minded people can socialize, share their experiences and problems,
                understand things better, and prosper. Additionally, people can also get information about different mental health problems,
                tips, solutions, etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h3>Our Team</h3>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-3 text-center profile">
              <img className="img-fluid p-4" src="avatar.png" alt="" />
              <h5>
                
                  <img className="icon" src="" alt="" /> Jaya Kishore
                
              </h5>
            </div>
            <div className="col-md-3 text-center profile">
              <img className="img-fluid p-4" src="avatar.png" alt="" />
              <h5>
                
                  <img className="icon" src="" alt="" />Srikrishna
                
              </h5>
            </div>
            <div className="col-md-3 text-center profile">
              <img className="img-fluid p-4" src="avatar.png" alt="" />
              <h5>
                
                  <img className="icon" src="" alt="" />Arya Rohan
                
              </h5>
            </div>
            <div className="col-md-3 text-center profile">
              <img className="img-fluid p-4" src="avatar.png" alt="" />
              <h5>
                
                  <img className="icon" src="./images/linkedIn.ico" alt="" />Chaitanya
                
              </h5>

            </div>
            <div className="col-md-3 text-center profile">
              <img className="img-fluid p-4" src="avatar.png" alt="" />
              <h5>
                
                  <img className="icon" src="" alt="" />Sudheera
                
              </h5>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
