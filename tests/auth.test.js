const axios = require('axios');
const config = require('./config');

const baseURL = config.baseURL;

describe('Auth API Tests', () => {
  test('Login with valid credentials', async () => {
    const start = Date.now();
    const res = await axios.post(`${baseURL}/auth/login`, {
      email: 'test@example.com',
      password: 'password123',
    });

    const duration = Date.now() - start;

    expect(res.status).toBe(200);
    expect(res.data.token).toBeDefined();
    expect(duration).toBeLessThan(config.defaultTimeout);
  });

  test('Login with invalid credentials', async () => {
    try {
      await axios.post(`${baseURL}/auth/login`, {
        email: 'invalid@example.com',
        password: 'wrongpass',
      });
    } catch (err) {
      expect(err.response.status).toBe(401);
      expect(err.response.data).toBeDefined(); // Safer than checking .message
      console.log('Invalid login response:', err.response.data); // For debugging
    }
  });
});
