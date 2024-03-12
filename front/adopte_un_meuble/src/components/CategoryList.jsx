import React from "react";

async function getCategoryList() {
  let response = await fetch("http://localhost:3000/api/publication/category");
  let data = await response.json();
  console.log(data);
  return data;
}

let categoryData = await getCategoryList();

function CategoryList() {
  return (
    <div className="flex justify-center items-center">
      <ul>
        {categoryData.map((category, index) => (
          <a href={"/category/filter?type=" + category.type} key={index}>
            <li>{category.type}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
