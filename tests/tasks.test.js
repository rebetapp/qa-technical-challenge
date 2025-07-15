const axios = require('axios');
const config = require('./config');
const baseURL = config.baseURL;

let token;

beforeAll(async () => {
  const res = await axios.post(`${baseURL}/auth/login`, {
    email: 'test@example.com',
    password: 'password123',
  });
  token = res.data.token;
});

describe('Task API Tests', () => {
  test('Create task successfully', async () => {
    const res = await axios.post(`${baseURL}/tasks`, {
      title: 'Test Task',
      description: 'Sample Description',
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log('Create Task response:', res.data);

    expect(res.status).toBe(201);
    expect(res.data.task).toHaveProperty('title', 'Test Task'); // ✅ Fixed line
  });

  test('Create task with missing title', async () => {
    try {
      await axios.post(`${baseURL}/tasks`, {
        description: 'Missing title',
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      expect(err.response.status).toBe(400);
      console.log('Missing title response:', err.response.data);
    }
  });

  test('Get all tasks successfully', async () => {
    const res = await axios.get(`${baseURL}/tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log('Get All Tasks response:', res.data);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data.tasks)).toBe(true); // ✅ Fixed line
  });
});
