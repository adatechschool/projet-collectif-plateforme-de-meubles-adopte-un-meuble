//Fichier qui crée les routes

//Récupérer express et la fonction meublesControllers
const express = require("express");
const publicationControllers = require("../controllers/publicationControllers");

//Création d'un router
const router = express.Router();

//Définition de la méthode GET pour la route "/"
router.get("/", publicationControllers.getAllPublication);

//Export de router pour pouvoir l'utiliser dans le fichier app.js
module.exports = router;
