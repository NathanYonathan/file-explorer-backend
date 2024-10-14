const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('file_explorer', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5433,
});

module.exports = sequelize;
