//Fichier qui crée les routes

//Récupérer express et la fonction publicationControllers
const express = require("express");
const publicationControllers = require("../controllers/publicationControllers");

//Création d'un router
const router = express.Router();

//Définition des méthodes GET :
router.get("/all", publicationControllers.getAllPublication);
router.get("/filter", publicationControllers.filterPublication);
router.get("/:id", publicationControllers.getPublicationById);
router.get("/", publicationControllers.getEssentials);



//Méthode put pour updater le statut d'une publication selon l'id :
router.put("/updatestatut/:id", publicationControllers.updateStatut);

//Méthode delete pour supprimer une publi :
router.delete("/delete/:id", publicationControllers.getDeletePost);
router.post("/create",publicationControllers.getNewPost)
router.delete("/delete/:id", publicationControllers.getDeletePost)
router.delete("/deletePanier/:id", publicationControllers.getDeletePanier)

//Export de router pour pouvoir l'utiliser dans le fichier app.js
module.exports = router;
