import React from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

async function getCategoryArticles() {
  let response = await fetch(
    "http://localhost:3000/api/publication/filter?type=canapé"
  );
  let data = await response.json();
  console.log(data);
  return data;
}

getCategoryArticles();

let categoryArticles = await getCategoryArticles();

function ProductPage() {
  // const numberOfCards = categoryArticles.length;
  return (
    <div className="flex justify-center py-[5rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {categoryArticles.map((categoryArticle, index) => (
          <ProductCard
            key={index}
            image={
              categoryArticle.photos
                ? "http://localhost:3000/photos/" + categoryArticle.photos[0]
                : "http://localhost:3000/photos/" + "logo.png"
            }
            title={categoryArticle.titre}
            price={categoryArticle.prix}
            divers={categoryArticle.Couleur.couleur}
            seller={categoryArticle.Utilisateur.pseudo}
          />
        ))}
      </div>
      <Navbar />
    </div>
  );
}

export default ProductPage;
