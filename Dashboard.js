import React from 'react';
import { Link } from 'react-router-dom';
// import './.css'; // Import the CSS file
import AppBar from './appbardashboard.js';

function Home() {
  return (
    <div>
      <div className="dashboard-container">
        <AppBar position="static">
        {/* Add About and Login buttons */}
      </AppBar>
        </div>
       

      <div className='body'>
        <h1></h1>
      </div>
    </div>
  );
}

export default Home;