const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produit = require('./Produit');
const Colocataire = require('./Colocataire');

const Repartition = sequelize.define('Repartition', {
  pourcentage: {
    type: DataTypes.FLOAT,
  },
  quantite: {
    type: DataTypes.FLOAT,
  },
});

Repartition.belongsTo(Produit, { foreignKey: 'produitId' });
Repartition.belongsTo(Colocataire, { foreignKey: 'colocataireId' });

module.exports = Repartition;
