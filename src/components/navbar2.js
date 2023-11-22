import React from 'react';
import { Link } from 'react-router-dom';

function Navbar2() {
  const handleLogout = () => {
  localStorage.removeItem("username");
  window.location.href = "/";
};
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ borderBottom: 'white solid 0.6vw' }}>
        <div className="container-fluid">
          <img src="logo.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
          <Link className="navbar-brand" to="/dashboarddoctor">MIND HEAVEN</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/dashboarddoctor">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/chatsdoctor">Chats</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/healthproblems2">Health problems</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profiledoctor">Profile</Link>
              </li>
              
            </ul>
             <Link className="btn btn-danger" to="/" onClick={handleLogout}>Sign Out</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
