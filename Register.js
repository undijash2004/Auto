import React, { useState } from 'react';
import { signup } from './api'; // Import the signup function
import {useNavigate} from 'react-router-dom'
import './Register.css'
function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(formData);
      // Signup successful, do something (e.g., redirect to login page)
      console.log('Signup successful');
      navigate('/Login')

    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="signup">
    <div className="signup-container">
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Signup</button>
      </form>
    </div>
    </div>
  );
}

export default SignupPage;