const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Colocation = require('./Colocation');

const Course = sequelize.define('Course', {
  date_achat: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Course.belongsTo(Colocation, { foreignKey: 'colocationId' });

module.exports = Course;
