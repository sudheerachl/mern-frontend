import React from 'react';
import './App.css';
import Home from './components/home';
import Blogs from './components/blogs';
import HealthProblems from './components/healthproblems';
import Healthbot from './components/healthbot';
import Signinuser from './components/signinuser';
import Signupuser from './components/signupuser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nave } from './components/dashboarduser';
import Testing from './components/chats';
import HealthProblems1 from './components/healthproblems1';
import Profileuser from './components/profileuser';
import Quiz2 from './components/quiz2';
import Infouser from './components/infouser';
import Updateuser from './components/updateuser';
import Deleteuser from './components/deleteuser';

function App() {
  return (
    <>
      <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/healthproblems' element={<HealthProblems/>} />
          <Route path='/healthbot' element={<Healthbot />} />
          <Route path='/signupuser' element={<Signupuser />} />
          <Route path='/signinuser' element={<Signinuser />} />
          <Route path='/dashboarduser' element={<Nave />} />
          <Route path='/chats' element={<Testing />} />
          <Route path='/healthproblems1' element={<HealthProblems1 />} />
          <Route path='/infouser' element={<Infouser/>} />
          <Route path='/deleteuser' element={<Deleteuser/>} />
          <Route path='/updateuser' element={<Updateuser/>} />
          <Route path='/profileuser' element={<Profileuser />} />
          <Route path='/quiz2' element={<Quiz2 />} />
          
        </Routes>

        
        
      </Router>
    </>
  );
}

export default App;
