const { createClient } = require("@supabase/supabase-js");

//Récupérer la clé d'API de Supabase dans le fichier .env
require("dotenv").config();

//Lien entre BDD et API
const supabaseUrl = "https://zfrowkmhwhnhmyzwxlez.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;

//Obtenir l'autorisation d'utiliser la BDD à partir de l'URL et de la clé d'API : on récupère une key ou token
const supabase = createClient(supabaseUrl, supabaseKey);

const createUser = async (email, password, nom, prenom) => {
  console.log(email, password, nom, prenom);
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log("Sign Up Result:", { data, error });
    if (error) {
      console.log(error);
      return { user: null, session: null, error: error.message };
    }
    const { user, session } = data;
    console.log("user", user);

    const { data: createData, error: errorInsert } = await supabase
      .from("Utilisateur")
      .upsert([
        {
          id: user.id,
          nom: nom,
          prénom: prenom,
          mail: email,
          pseudo: null,
          admin: null,
        },
      ]);
    if (errorInsert) {
      console.log(errorInsert);
      return { user: null, session: null, error: errorInsert.message };
    }

    return { user, session };
  } catch (error) {
    console.log(error);
    return { user: null, session: null, error: error.message };
  }
};

const loginUser = async (email, password) => {
  console.log(email, password);
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return {
        user: null,
        session: null,
        error: "Adresse e-mail ou mot de passe incorrect.",
      };
    }

    const { user, session } = data;
    return { user, session };
  } catch (error) {
    return { user: null, session: null, error: error.message };
  }
};
module.exports = { createUser, loginUser };
