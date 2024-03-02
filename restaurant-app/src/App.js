<<<<<<< HEAD
import React from 'react';
import MySideNav from './assests/pages/MySdieNav';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './assests/pages/Login'; // Import the Login component
import FeedbackForm from './assests/pages/feedback';
import Service from './assests/pages/service';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} /> 
          <Route path="/dashboard" element={<MySideNav />} />
          <Route path="/feedback" component={FeedbackForm} /> 
            <Route path="/service" component={Service} />
        </Routes>
      </BrowserRouter>
    </>
=======
import './App.css';
import Menu from './assests/pages/menu';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
     
    </div>
>>>>>>> 9fc55d6b500629c13a5124b91f044b35cfaa673b
  );
}

export default App;
