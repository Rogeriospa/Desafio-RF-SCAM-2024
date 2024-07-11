const Department = require('../models/department');

exports.createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Outros métodos CRUD aqui