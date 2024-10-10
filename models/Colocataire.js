const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Colocation = require('./Colocation');

const Colocataire = sequelize.define('Colocataire', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Colocataire.belongsTo(Colocation, { foreignKey: 'colocationId' });

module.exports = Colocataire;
