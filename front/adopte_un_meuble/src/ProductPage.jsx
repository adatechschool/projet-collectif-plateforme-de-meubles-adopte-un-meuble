import React from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

function ProductPage() {
  return (
    <div className="">
      <ProductCard
        image="./public/cabinet_1.png"
        title="Canapé Vintage Rétro"
        price="€250"
        divers="Divers"
        seller="Vendeur"
      />
      <Navbar />
    </div>
  );
}

export default ProductPage;
