import React from 'react';
import './App.css';
import Home from './components/home';
import Blogs from './components/blogs';
import HealthProblems from './components/healthproblems';
import Healthbot from './components/healthbot';
import Signin from './components/signin';
import Signupuser from './components/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nave } from './components/dashboard';
import Testing from './components/chats';
import HealthProblems1 from './components/healthproblems1';
import Profile from './components/profile';
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
          <Route path='/signup' element={<Signupuser />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Nave />} />
          <Route path='/chats' element={<Testing />} />
          <Route path='/healthproblems1' element={<HealthProblems1 />} />
          <Route path='/infodoctor' element={<Infouser/>} />
          <Route path='/deletedoctor' element={<Deleteuser/>} />
          <Route path='/updatedoctor' element={<Updateuser/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/quiz2' element={<Quiz2 />} />
          
        </Routes>

        
        
      </Router>
    </>
  );
}

export default App;
