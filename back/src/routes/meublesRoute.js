//Fichier qui crée les routes

//Récupérer express et la fonction meublesControllers
const express = require("express");
const meublesControllers = require("../controllers/meublesControllers");

//Création d'un router
const router = express.Router();

//Définition de la méthode GET pour la route "/"
router.get("/", meublesControllers.getAllMeubles);

//Export de router pour pouvoir l'utiliser dans le fichier app.js
module.exports = router;
