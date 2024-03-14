//Fichier qui crée les routes

//Récupérer express et la fonction publicationControllers
const express = require("express");
const publicationControllers = require("../controllers/publicationControllers");

//Création d'un router
const router = express.Router();

//Définition des méthodes GET :
router.get("/category", publicationControllers.getCategoryList);
router.get("/status", publicationControllers.getStatusList);
router.get("/etat", publicationControllers.getEtatList);
router.get("/matiere", publicationControllers.getMatiereList);
router.get("/couleur", publicationControllers.getCouleurList);
router.get("/piece", publicationControllers.getPieceList);
router.get("/all", publicationControllers.getAllPublication);
router.get("/filter", publicationControllers.filterPublication);
router.get("/:id", publicationControllers.getPublicationById);
router.get("/", publicationControllers.getEssentials);
router.get("/panier/:id", publicationControllers.getPanier);

//Méthode put pour updater le statut d'une publication selon l'id :
router.put("/updatestatut/:id", publicationControllers.updateStatut);

//Méthode post pour créer une publi :
router.post("/create", publicationControllers.getNewPost);
router.post("/addpanier", publicationControllers.addCart);

//Méthode delete pour supprimer une publi :
router.delete("/delete/:id", publicationControllers.getDeletePost);

//Méthode delete pour supprimer un panier :
router.delete("/deletePanier/:id", publicationControllers.getDeletePanier);

//Export de router pour pouvoir l'utiliser dans le fichier app.js
module.exports = router;
