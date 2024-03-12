import React from "react";
import CategoryList from "./components/CategoryList";
import Navbar from "./components/Navbar";

function CategoryPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Navbar />
      <CategoryList left={true} />
    </div>
  );
}

export default CategoryPage;
