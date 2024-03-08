const { createClient } = require("@supabase/supabase-js");

//Récupérer la clé d'API de Supabase dans le fichier .env
require("dotenv").config();

//Lien entre BDD et API
const supabaseUrl = "https://zfrowkmhwhnhmyzwxlez.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpmcm93a21od2huaG15end4bGV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NTg5NjUsImV4cCI6MjAyNTEzNDk2NX0.6HS7PaiqkOQtN3JPNCCBAW2058bJNQoAuECWeurKlYM";
console.log(supabaseKey);

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
    }
    const { user, session } = data;
    console.log("user", user);

    const { data: createData, error: errorInsert } = await supabase
      .from("User")
      .upsert([
        {
          nom: nom,
          prénom: prenom,
          mail: email,
          mdp: null,
          pseudo: null,
          admin: null,
        },
      ]);
    if (errorInsert) {
      console.log(errorInsert);
      throw new Error(
        "Erreur lors de l'insertion des détails de l'utilisateur"
      );
    }

    // Retourner le token de session avec la réponse
    return { user, session };
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async (email, password) => {
  console.log(email, password);
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) console.error(error);

    const { user, session } = data;
    return { user, session };
  } catch (error) {
    console.error(error);
  }
};
module.exports = { createUser, loginUser };
