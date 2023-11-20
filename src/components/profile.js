import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar1 from './Navbar1';
import VerticalNavbar from './VerticalNavbar';
import Successdoctor from './Successdoctor';
import Infodoctor from './Infodoctor';

const ProfilePage = () => {
  const [selectedOption, setSelectedOption] = useState('/info-doctor');

  return (
    <Router>
      <div className="profile-page">
        <Navbar1 />
        <VerticalNavbar />
        <div className="main-content">
          {/* Content based on the selected option */}
          <Route path='/info-doctor' component={Infodoctor} />
          <Route path='/delete-doctor' component={DeleteDoctor} />
          <Route path='/update-doctor' component={UpdateDoctor} />
          <Route path='/' component={Logout} />
        </div>
      </div>
    </Router>
  );
};

export default ProfilePage;
