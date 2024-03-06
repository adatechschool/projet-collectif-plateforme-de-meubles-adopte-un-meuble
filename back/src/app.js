//Fichier qui lance le serveur

//Récupérer express et la fonction publicationRoute
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const publicationRoute = require("./routes/publicationRoute");

const app = express();
const port = 3000;
const API_SERVICE_URL = "http://jsonplaceholder.typicode.com";

//Middleware pour parser le JSON et utiliser le fichier JSON
app.use(express.json());

app.use("/api/publication", publicationRoute);

app.use("", (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.sendStatus(403);
  }
});
app.use(
  "/json_placeholder",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { [`^/json_placeholder`]: "" },
  })
);

app.get("/info", (req, res, next) => {
  res.send("Hello World!");
});

//Lancer le serveur
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
