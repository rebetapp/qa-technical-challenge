#  QA Automation Challenge

## Overview
Create automated tests for a simple task management API. This challenge should take 2-3 hours to complete.

## The API
Test these 3 endpoints of a task management API:
- `POST /api/auth/login` - User login
- `POST /api/tasks` - Create task  
- `GET /api/tasks` - Get all tasks

**Base URL**: `https://demo-taskmanager.herokuapp.com/api`

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
2. Set environment: `export API_BASE_URL=https://demo-taskmanager.herokuapp.com/api`
3. `npm test`
4. Check `reports/` folder for results

## Evaluation (5 minutes)

### Setup Check (1 min)
```bash
npm install
npm test
```

### Code Review (2 min)
- [ ] Tests run without errors
- [ ] All 5 scenarios covered
- [ ] Response time assertions included
- [ ] Environment variables used

### Report Check (1 min)
- [ ] HTML report generated
- [ ] Pass/fail counts visible
- [ ] Response times shown

### Final Score (1 min)
- **Excellent (90-100%)**: All tests pass, clean code, good reports
- **Good (70-89%)**: Most tests pass, reasonable code
- **Fair (50-69%)**: Some tests pass, basic implementation
- **Poor (<50%)**: Tests don't run or major issues

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