const express = require('express');
const router = express.Router();
const Users = require('../models/users_model');

function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Token requis');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).send('Token invalide');
  }
}



// Register
app.post('/register', async (req, res) => {
  try {
     const { name, lastName ,email, phone, password } = req.body;
    const existing = await name.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email déjà utilisé' });

    const user = new User({ name, lastName,email, phone,password });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Utilisateur non trouvé' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Mot de passe incorrect' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ajouter une performance
app.post('/performance', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.performances.push(req.body);
    await user.save();
    res.json(user.performances);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Créer un programme
app.post('/program', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.programs.push(req.body);
    await user.save();
    res.json(user.programs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
