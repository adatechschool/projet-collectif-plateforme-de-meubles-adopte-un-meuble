//Fichier qui fait une requête pour récupérer les données de la BDD

//Importer supabase
const { createClient } = require("@supabase/supabase-js");

//Récupérer la clé d'API de Supabase dans le fichier .env
require("dotenv").config();

//Lien entre BDD et API
const supabaseUrl = "https://zfrowkmhwhnhmyzwxlez.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
console.log(supabaseKey);

//Obtenir l'autorisation d'utiliser la BDD à partir de l'URL et de la clé d'API : on récupère une key ou token
const supabase = createClient(supabaseUrl, supabaseKey);

//Requête pour obtenir toutes les publications de la BDD :
const getPublication = async (req, res) => {
    const { data, error } = await supabase.from("Publications").select("*");
    if (error) throw error;
    return data;
};

//Requête pour obtenir une publication à partir de son id :
const getPublicationById = async (req, res) => {
    const { data, error } = await supabase.from("Publications").select("*").eq("id", req.params.id);
    if (error) throw error;
    return data;
};

// front doit renvoyer l'id de couleur, l'id de type et le prix
// permet de filtrer les publications
const filterPublication = async (req, res) => {
    let query = supabase.from("Publications").select("*, Couleur!inner(id, couleur), Type!inner(id, type)");
    const type = req.query.type;
    const couleur = req.query.couleur;
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;

    if (type) {
        query = query.eq("Type.type", type);
    }
    if (couleur) {
        query = query.eq("Couleur.couleur", couleur);
    }
    if (minPrice) {
        query = query.gte("prix", minPrice);
    }
    if (maxPrice) {
        query = query.lte("prix", maxPrice);
    }

    const { data, error } = await query;
    if (error) {
        throw error;
    }
    return data;
};

const getEssentials = async (req, res) => {
    const { data, error } = await supabase.from("Publications").select("titre, photos, prix");
    if (error) throw error;
    return data;
};

//Exporter les fonctions pour pouvoir les utiliser dans le fichier publicationControllers.js
module.exports = { getPublication, getPublicationById, filterPublication, getEssentials };
