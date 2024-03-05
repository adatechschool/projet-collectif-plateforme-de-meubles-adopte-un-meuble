//Fichier qui détermine l'utilisation des données de la requête

//Importe la fonction getMeubles du fichier meublesModel.js
const meublesModel = require("../models/meublesModel");

//Fonction pour afficher la liste de meuble récupérée dans meubleModel.js
const getAllMeubles = async (req, res) => {
  try {
    const meubles = await meublesModel.getMeubles();
    res.send(meubles);
    console.log(meubles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Export de la fonction getAllMeubles pour pouvoir l'utiliser dans le fichier meublesRoute.js
module.exports = { getAllMeubles };
