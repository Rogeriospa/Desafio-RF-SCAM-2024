const express = require('express');
const { createDepartment } = require('../controllers/departmentController');
const router = express.Router();

router.post('/departments', createDepartment);

// Outras rotas CRUD aqui

module.exports = router;