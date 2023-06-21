import React from "react";

const Categories = ({ categories, setSelectedCategory }) => {
  return (
    <section className="btn-container">
      {categories.map((category) => {
        return (
          <button
            key={category}
            className="filter-btn"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
};

export default Categories;
