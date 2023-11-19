import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ borderBottom: 'white solid 0.6vw' }}>
        <div className="container-fluid">
          <img src="logo.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
          <Link className="navbar-brand" to="/">MIND HEAVEN</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/healthproblems">Health problems</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quiz2">Quiz</Link>
              </li>
             
            </ul>
            <Link className="btn btn-primary" to="/signin" role="button">Sign in</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
