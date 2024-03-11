const authModels = require("../models/authModel");

const register = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password, nom, prenom } = req.body;
    console.log(email, password, nom, prenom);
    const { user, session } = await authModels.createUser(
      email,
      password,
      nom,
      prenom
    );
    res.status(201).json({ user, session });
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: error });
  }
};

const login = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await authModels.loginUser(email, password);
    res.status(200).json({ user });
    console.log("login ok ", user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
module.exports = { register, login };
