import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar1 from './navbar1';
import VerticalNavbar from './vnuser';
import Updateuser from './updateuser';
import Deleteuser from './deleteuser';
import Infouser from './infouser';

const ProfilePage = () => {
  const [selectedOption, setSelectedOption] = useState('/info-doctor');

  return (
    <Router>
      <div className="profile-page">
        <Navbar1 />
        <VerticalNavbar />
        <div className="main-content">
          {/* Content based on the selected option */}
          <Route path='/info-doctor' component={Infouser} />
          <Route path='/update-doctor' component={Updateuser} />
          <Route path='/delete-doctor' component={Deleteuser} />
          <Route path='/' component={Logout} />
        </div>
      </div>
    </Router>
  );
};

export default ProfilePage;
