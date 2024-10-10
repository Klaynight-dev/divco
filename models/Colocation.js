const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Colocation = sequelize.define('Colocation', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code_acces: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Colocation;
