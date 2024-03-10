// Home.js
import React from 'react';
// import { Link } from 'react-router-dom';

import './Home.css'; 
import AppBar from './Appbar.js';


function Home() {
  return (
    <div>
      
      <div className="home-container">
      <AppBar position="static">
      </AppBar>
      </div>
       <div className='body'>
        <h1></h1>
      </div>
    </div>
  );
}

export default Home;