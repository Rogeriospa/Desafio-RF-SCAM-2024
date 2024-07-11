const Employee = require('../models/employee');
const { createEmployee } = require('../controllers/employeeController');

describe('Employee Controller', () => {
  it('should create a new employee', async () => {
    const req = {
      body: {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Developer'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await createEmployee(req, res);

    expect(res.status).toHaveBeenCalledWith(201);

    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Developer'
      }));
    });
  });  