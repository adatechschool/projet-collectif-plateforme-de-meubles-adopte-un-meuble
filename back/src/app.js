//Fichier qui lance le serveur

//Récupérer express et la fonction publicationRoute
const express = require("express");
const cors = require("cors");

const publicationRoute = require("./routes/publicationRoute");
const authRoute = require("./routes/authRoutes");

<<<<<<< HEAD

=======
>>>>>>> 650908c98ca41a02a81f682f0901f10b0a7e646e
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(cors());

//Middleware pour parser le JSON et utiliser le fichier JSON
app.use(express.json());

app.use("/api/publication", publicationRoute);
app.use("/api/auth", authRoute);

//Lancer le serveur
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
