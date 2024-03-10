import React from 'react';
import { Link } from 'react-router-dom';
import './Appbar.css';

class AppBar extends React.Component {
  render() {
    return (
      <div className="app-bar">
        <div className="logo">Automobile Management System</div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <Link to="/Dashboard"><button>Search</button></Link>
        </div>
        <div className="user-actions">
          <Link to="/login"><button>Login</button></Link>
        </div>
        <div className="register-button">
        <Link to="/Register"><button>Register</button></Link>
        </div>
        <div className="about-button">
        <Link to="/About"><button>About</button></Link>
        </div>
      </div>
    );
  }
}

export default AppBar;