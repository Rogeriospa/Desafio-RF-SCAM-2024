const express = require('express');
const { createEmployee } = require('../controllers/employeeController');
const router = express.Router();

router.post('/employees', createEmployee);

// Outras rotas CRUD aqui

module.exports = router;