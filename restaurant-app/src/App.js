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
  );
}

export default App;
