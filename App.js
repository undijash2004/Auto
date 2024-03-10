// App.js
import React from 'react';
import Register from './Register'
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard'; 
import About from './about'; 
import Contact from './contact'; 


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;