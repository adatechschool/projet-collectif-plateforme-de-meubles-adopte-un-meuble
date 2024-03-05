//Fichier qui lance le serveur

//Récupérer express et la fonction meublesRoute
const express = require("express");
const meublesRoute = require("./routes/meublesRoute");

const app = express();
const port = 3000;

//Middleware pour parser le JSON et utiliser le fichier JSON
app.use(express.json());

app.use("/api/meubles", meublesRoute);

//Lancer le serveur
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
