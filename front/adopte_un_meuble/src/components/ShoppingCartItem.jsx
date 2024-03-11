import React from "react";

function ShoppingCartItem(props) {
  return (
    <div className="w-full flex flex-col items-start gap-y-1">
      <h3 className="text-lightMode-text text-3xl font-bold">
        {props.titre}
      </h3>
      <h4 className="text-lightMode-secondarytext text-2xl font-bold">{props.prix}</h4>
      <h4 className="text-lightMode-secondarytext text-2xl font-bold underline">
        {props.supprimer}
      </h4>
    </div>
  );
}

export default ShoppingCartItem;

//récupération de la base de données
//faire un if = id prendre le titre de id

async function buyPublication(props) {
  const rep = await fetch("api/publication");
  const publication = await rep.json();
  console.log("publication", publication);
  const titre = publication[1].titre;
  console.log("titre", titre)
}

buyPublication()

//async function getFetchCart() {
  //const reponse = await fetch("http://localhost:3000/api/publication/panier/4");
  //const panier = await reponse.json();
  //console.log("panier", panier);
  //const publicationTitle = await publication[1].titre
  //console.log("publicationTitle", publicationTitle)
//}

//getFetchCart()



//fonction qui change le panier
//function getCart() {
  //const ex = ShoppingCartItem(props)
  //console.log(ex, props.title)
//}

//getCart()