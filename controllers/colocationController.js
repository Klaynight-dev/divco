const Colocation = require('../models/Colocation');

exports.createColocation = async (req, res) => {
  try {
    const { nom, code_acces } = req.body;
    const colocation = await Colocation.create({ nom, code_acces });
    res.status(201).json(colocation);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue.' });
  }
};
