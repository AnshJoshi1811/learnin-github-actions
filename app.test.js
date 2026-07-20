const request = require('supertest');
const app = require('./app');

test('GET / should return greeting message', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.body.message).toBe('Hello! GitHub Actions is working!');
});

test('GET /health should return OK', async () => {
  const response = await request(app).get('/health');
  expect(response.status).toBe(200);
  expect(response.body.status).toBe('OK');
});