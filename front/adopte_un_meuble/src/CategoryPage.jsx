import React from "react";
import CategoryList from "./components/CategoryList";
import Navbar from "./components/Navbar";
import { Toaster } from "@/components/ui/toaster";

function CategoryPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Navbar />
      <CategoryList left={true} />
      <Toaster/>
    </div>
  );
}

export default CategoryPage;
