import React from 'react';
import './App.css';
import Home from './components/home';
import Blogs from './components/blogs';
import HealthProblems from './components/healthproblems';
import Healthbot from './components/healthbot';
import Signin from './components/signin';
import Signup from './components/signup';
import Signinuser from './components/signinuser';
import Signupdoctor from './components/signupuser';
import Signindoctor from './components/signindoctor';
import Signupuser from './components/signupdoctor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Naveuser } from './components/dashboarduser';
import { Navedoctor } from './components/dashboarddoctor';
import Testing from './components/chats';
import HealthProblems1 from './components/healthproblems1';
import Profileuser from './components/profileuser';
import Profiledoctor from './components/profiledoctor';
import Quiz2 from './components/quiz2';
import Infouser from './components/infouser';
import Updateuser from './components/updateuser';
import Deleteuser from './components/deleteuser';
import Infodoctor from './components/infodoctor';
import Updatedoctor from './components/updatedoctor';
import Deletedoctor from './components/deletedoctor';

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
          <Route path='/signupdoctor' element={<Signupdoctor />} />
          <Route path='/signindoctor' element={<Signindoctor />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboarduser' element={<Naveuser />} />
          <Route path='/dashboarddoctor' element={<Navedoctor />} />
          <Route path='/chats' element={<Testing />} />
          <Route path='/healthproblems1' element={<HealthProblems1 />} />
          <Route path='/infouser' element={<Infouser/>} />
          <Route path='/deleteuser' element={<Deleteuser/>} />
          <Route path='/updateuser' element={<Updateuser/>} />
          <Route path='/profileuser' element={<Profileuser />} />
          <Route path='/infodoctor' element={<Infodoctor/>} />
          <Route path='/deletedoctor' element={<Deletedoctor/>} />
          <Route path='/updatedoctor' element={<Updatedoctor/>} />
          <Route path='/profiledoctor' element={<Profiledoctor />} />
          <Route path='/quiz2' element={<Quiz2 />} />
          
        </Routes>

        
        
      </Router>
    </>
  );
}

export default App;
