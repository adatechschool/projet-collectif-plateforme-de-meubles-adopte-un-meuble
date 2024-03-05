//Fichier qui détermine l'utilisation des données de la requête

//Importe la fonction getMeubles du fichier publicationModel.js
const publicationModel = require("../models/publicationModel");

//Fonction pour afficher la liste de meuble récupérée dans meubleModel.js
const getAllPublication = async (req, res) => {
  try {
    const publication = await publicationModel.getPublication();
    res.send(publication);
    console.log(publication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Export de la fonction getAllpublication pour pouvoir l'utiliser dans le fichier meublesRoute.js
module.exports = { getAllPublication };
