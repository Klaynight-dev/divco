const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const colocationRoutes = require('./routes/colocations');
app.use('/api/colocations', colocationRoutes);

// Synchroniser avec la base de données
sequelize.sync().then(() => {
  console.log('Base de données synchronisée.');
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
