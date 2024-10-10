const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./Course');

const Produit = sequelize.define('Produit', {
  nom_produit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantite: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  prix: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Produit.belongsTo(Course, { foreignKey: 'courseId' });

module.exports = Produit;
