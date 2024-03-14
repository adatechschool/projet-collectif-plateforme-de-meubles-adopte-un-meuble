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
        <h3 className="text-lightMode-text text-lg font-semibold">
          catégories
        </h3>
        {categoryData.map((category, index) => (
          <a href={"/category/filter?type=" + category.type} key={index}>
            <li className="text-lg text-lightMode-text hover:rotate-6 hover:text-lightMode-secondarytext hover:underline origin-bottom-right transition">
              {category.type}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
