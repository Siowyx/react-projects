import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const categories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
      <Menu
        foodList={
          selectedCategory === "all"
            ? items
            : items.filter((item) => item.category === selectedCategory)
        }
      />
    </main>
  );
}

export default App;
