import React from 'react';
import { Link } from 'react-router-dom';

const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
      {/* Add your vertical navigation links here */}
      <Link to='/infouser'>Info Doctor</Link>
      <Link to='/deleteuser'>Delete</Link>
      <Link to='/updateuser'>Edit</Link>
      <Link to='/'>Logout</Link>
    </div>
  );
};

export default VerticalNavbar;
