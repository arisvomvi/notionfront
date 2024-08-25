import axios from 'axios';

// Create an instance of axios with default settings
const instance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend base URL
  timeout: 10000, // Optional: Set a timeout
});

export default instance;
