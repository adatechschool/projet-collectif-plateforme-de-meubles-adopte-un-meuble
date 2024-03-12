import React from "react";

async function getCategoryList() {
  let response = await fetch("http://localhost:3000/api/publication/category");
  let data = await response.json();
  console.log(data);
  return data;
}

let categoryData = await getCategoryList();

function CategoryList({ left }) {
  return (
    <div className="w-min">
      <ul
        className={`flex w-max flex-col ${left ? "items-start" : "items-end"}`}
      >
        {categoryData.map((category, index) => (
          <a href={"/category/filter?type=" + category.type} key={index}>
            <li className="text-2xl text-lightMode-text">{category.type}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
