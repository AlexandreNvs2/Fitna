const express = require('express');
const router = express.Router();
const Users = require('../models/users_model');

// Route POST pour créer un compte
router.post('/register', async (req, res) => {
  const { name, lastName ,email, phone, password } = req.body;

  try {
    const nouvelUtilisateur = new Users({ name, lastName, email, phone ,password });
    await nouvelUtilisateur.save();
    res.status(201).json({ message: 'Compte créé avec succès' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Erreur lors de la création du compte' });
  }

  try {
      const token = jwt.sign({ id: email._id }, process.env.JWT_SECRET);
      res.json({ token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

module.exports = router;
