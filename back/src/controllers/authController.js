const authModels = require("../models/authModel");

const register = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password, nom, prenom } = req.body;
    console.log(email, password, nom, prenom);
    const { user, session, error } = await authModels.createUser(
      email,
      password,
      nom,
      prenom
    );
    if (error) {
      console.log(error);
      if (error.includes("email")) {
        // Si l'erreur concerne l'email
        return res.status(401).json({
          error: "L'adresse e-mail est invalide. Veuillez en saisir une autre.",
        });
      } else if (error.includes("Password")) {
        // Si l'erreur concerne le mot de passe
        return res.status(401).json({
          error:
            "Le mot de passe est invalide. Veuillez choisir un mot de passe plus fort.",
        });
      } else {
        // Si une autre erreur s'est produite
        throw new Error(error);
      }
    }
    res.status(201).json({ user, session });
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ error: "Erreur lors de l'inscription. Veuillez réessayer." });
  }
};

const login = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await authModels.loginUser(email, password);
    if (user.error) {
      throw new Error(user.error);
    }
    res.status(200).json({ user });
    console.log("login ok ", user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
module.exports = { register, login };
