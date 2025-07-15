require('dotenv').config();

module.exports = {
  baseURL: process.env.API_BASE_URL || 'http://localhost:3000/api',
  defaultTimeout: 3000, // in ms
};
