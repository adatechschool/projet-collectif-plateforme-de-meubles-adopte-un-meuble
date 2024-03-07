//Fichier qui lance le serveur

//Récupérer express et la fonction publicationRoute
const express = require("express");


const publicationRoute = require("./routes/publicationRoute");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')) 

//Middleware pour parser le JSON et utiliser le fichier JSON
app.use(express.json());

app.use("/api/publication", publicationRoute);

//Lancer le serveur
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
