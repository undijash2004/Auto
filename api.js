// api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3005'; // Replace with your backend server URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signup = async (userData) => {
  try {
    const response = await api.post('/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};