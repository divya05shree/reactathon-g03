import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './assests/pages/login';
import MySideNav from './assests/pages/MySdieNav';
import FeedbackForm from './assests/pages/feedback';
import Service from './assests/pages/service';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<MySideNav />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
