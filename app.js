const express = require('express');
const sequelize = require('./config');
const employeeRoutes = require('./routes/employeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');

const app = express();

app.use(express.json());
app.use('/api', employeeRoutes);
app.use('/api', departmentRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(error => console.log('Error: ', error));