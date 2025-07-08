const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = 'qa-challenge-secret';

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let tasks = [
  { id: 1, title: 'Sample Task 1', description: 'This is a sample task', completed: false },
  { id: 2, title: 'Sample Task 2', description: 'Another sample task', completed: true }
];

let nextTaskId = 3;

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Routes

// POST /api/auth/login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Simulate processing delay
  setTimeout(() => {
    // Check for missing required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Email and password are required'
      });
    }

    if (email === 'test@example.com' && password === 'password123') {
      const token = jwt.sign({ email, userId: 1 }, JWT_SECRET, { expiresIn: '1h' });
      res.json({
        success: true,
        token,
        user: { email, userId: 1 }
      });
    } else {
      res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }
  }, Math.random() * 1000 + 500); // Random delay between 500ms and 1500ms
});

// POST /api/tasks
app.post('/api/tasks', authenticateToken, (req, res) => {
  const { title, description } = req.body;

  // Simulate processing delay
  setTimeout(() => {
    if (!title) {
      return res.status(400).json({
        success: false,
        error: 'Title is required'
      });
    }

    const newTask = {
      id: nextTaskId++,
      title,
      description: description || '',
      completed: false,
      createdAt: new Date().toISOString()
    };

    tasks.push(newTask);

    res.status(201).json({
      success: true,
      task: newTask
    });
  }, Math.random() * 1000 + 500);
});

// GET /api/tasks
app.get('/api/tasks', authenticateToken, (req, res) => {
  // Simulate processing delay
  setTimeout(() => {
    res.json({
      success: true,
      tasks,
      count: tasks.length
    });
  }, Math.random() * 1000 + 500);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
  console.log(`API Base URL: http://localhost:${PORT}/api`);
});

module.exports = app; 