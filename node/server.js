import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import userRoutes from './routes/userRoutes.js'; // si tu utilises des routes séparées

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
// app.use('/api/users', userRoutes);

// Connexion à MongoDB
mongoose.connect("mongodb+srv://mathhupel:b2T8BmXBRVwYmlkI@backend.wqvbf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BACKEND")
  .then(() => {
    console.log("✅ Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Échec de la connexion à MongoDB :", error);
  });
