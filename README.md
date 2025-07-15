# ✅ My Solution Summary (by Meghana Kodali)

This submission includes automated API tests built with **Jest**, **Axios**, and **dotenv** for the provided task management API.

### ✅ Scenarios Implemented:
- Login with valid credentials
- Login with invalid credentials
- Create task successfully
- Create task with missing title (negative test)
- Get all tasks

### 🛠 Tech Stack:
- Node.js
- Jest
- Axios
- dotenv
- jest-html-reporter

### 📄 Output:
- Test execution with `npm test`
- HTML report located at `reports/test-report.html`

---

_(Original challenge instructions below)_

#  QA Automation Challenge

## Overview
Create automated tests for a simple task management API. This challenge should take 2-3 hours to complete.

## The API
Test these 3 endpoints of a task management API:
- `POST /api/auth/login` - User login
- `POST /api/tasks` - Create task  
- `GET /api/tasks` - Get all tasks

**Base URL**: `http://localhost:3000/api` (local mock server)

## Requirements

### 1. API Tests (2 hours)
Create tests for the 3 endpoints above:

**Test Scenarios:**
- Login with valid credentials
- Login with invalid credentials  
- Create a task successfully
- Create a task with missing title (should fail)
- Get all tasks successfully

**Requirements:**
- Use any testing framework (Jest, Mocha, PyTest, etc.)
- Include response time check (< 3 seconds)
- Use environment variables for base URL

### 2. Simple Report (1 hour)
Generate a basic test report showing:
- Pass/fail counts
- Response times
- Error messages for failed tests

## Project Structure
```
QAChallenge/
├── tests/
│   ├── auth.test.js
│   ├── tasks.test.js
│   └── config.js
├── reports/
├── package.json
└── README.md
```

## Quick Start
1. `npm install`
2. Start the mock server: `npm run server` (in one terminal)
3. Run tests: `npm test` (in another terminal)
4. Check `reports/` folder for results

**Note**: The mock server runs on `http://localhost:3000` by default. You can override the API URL by setting the environment variable: `export API_BASE_URL=https://your-api-url.com/api`

## Evaluation (5 minutes)

### Setup Check (1 min)
```bash
npm install
npm test
```

## API Details

### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
```

### Create Task
```http
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Test Task",
  "description": "Test Description"
}
```

### Get Tasks
```http
GET /api/tasks
Authorization: Bearer <token>
```

## Submission
1. Fork this repo
2. Implement the 5 test scenarios
3. Create a pull request
4. Include a brief summary

**Time Limit**: 3 hours maximum 


