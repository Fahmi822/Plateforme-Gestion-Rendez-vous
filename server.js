const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

// Middleware pour parser le JSON
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB Atlas");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB Atlas:", err);
    });


app.use('/auth', authRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});