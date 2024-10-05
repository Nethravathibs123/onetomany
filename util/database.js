const Sequelize = require('sequelize');

const sequelize = new Sequelize('onetomany', 'root', 'Nethra@1', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;