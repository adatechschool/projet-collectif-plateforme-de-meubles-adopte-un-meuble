import React from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const fetchUrlCategoryType = new URLSearchParams(window.location.search);

const type = fetchUrlCategoryType.get("type");


async function getCategoryArticles() {
  let response = await fetch(
    `http://localhost:3000/api/publication/filter?type=${type}`
  );
  let data = await response.json();

  return data;
}

getCategoryArticles();

let categoryArticles = await getCategoryArticles();

function FilteredCategoryPage() {
  // const numberOfCards = categoryArticles.length;
  return (
    <div className="flex justify-center py-[5rem] bg-lightMode-background">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {categoryArticles.map((categoryArticle, index) => (
          <a href={"/article/filter?id=" + categoryArticle.id}>
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
          </a>
        ))}
      </div>
      <Navbar />
      <Toaster/>
    </div>
  );
}

export default FilteredCategoryPage;
