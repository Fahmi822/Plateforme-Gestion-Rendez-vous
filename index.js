const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connexion à MongoDB Atlas
mongoose.connect('mongodb+srv://admin:admin@cluster0.8s5ht.mongodb.net/Gestion-Rendez-vous')
    .then(() => {
        console.log("Base de données connectée avec succès");
    })
    .catch((err) => {
        console.error("Erreur de connexion à la base de données :", err);
    });

// Démarrer le serveur
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

// Route de test
app.get('/bonjour', (req, res) => {
    res.send("Bonjour");
});