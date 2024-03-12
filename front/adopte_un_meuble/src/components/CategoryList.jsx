import React from "react";

async function getCategoryList() {
  let response = await fetch("http://localhost:3000/api/publication/");
  let data = await response.json();
  console.log(data);
  return data;
}

function CategoryList() {
  return (
    <div>
      <h1>list</h1>
    </div>
  );
}

export default CategoryList;
