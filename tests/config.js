require('dotenv').config();

const config = {
  baseUrl: process.env.API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  testCredentials: {
    email: 'test@example.com',
    password: 'password123'
  }
};

module.exports = config; 