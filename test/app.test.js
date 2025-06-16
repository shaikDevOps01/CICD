const app = require('../app');
const request = require('supertest');

describe('GET /', () => {
  it('responds with Hello CI/CD World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello CI/CD World!');
  });
});