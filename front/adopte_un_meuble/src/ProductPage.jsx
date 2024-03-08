import React from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

function ProductPage() {
  const numberOfCards = 10;
  return (
    <div className="flex justify-center py-[5rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: numberOfCards }, (_, index) => (
          <ProductCard
            key={index}
            image="./public/cabinet_1.png"
            title="Canapé Vintage Rétro"
            price="€250"
            divers="Divers"
            seller="Vendeur"
          />
        ))}
      </div>
      <Navbar />
    </div>
  );
}

export default ProductPage;
