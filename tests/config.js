require('dotenv').config();

const config = {
  baseUrl: process.env.API_BASE_URL || 'https://demo-taskmanager.herokuapp.com/api',
  timeout: 10000,
  testCredentials: {
    email: 'test@example.com',
    password: 'password123'
  }
};

module.exports = config; 