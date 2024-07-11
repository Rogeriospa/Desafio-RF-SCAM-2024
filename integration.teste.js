const request = require('supertest');
const app = require('../app'); // Supondo que você exportou seu app no app.js

describe('API Integration Tests', () => {
  it('should create a new employee', async () => {
    const response = await request(app)
      .post('/api/employees')
      .send({
        name: 'Jane Doe',
        email: 'jane@example.com',
        role: 'Manager'
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Jane Doe');
  });

  // Outros testes de integração aqui
});