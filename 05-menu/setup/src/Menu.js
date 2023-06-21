import React from "react";

const Menu = ({ foodList }) => {
  return (
    <div className="section-center">
      {foodList.map((food) => {
        return (
          <article className="menu-item" key={food.id}>
            <img className="photo" src={food.img} alt={food.title} />
            <div className="item-info">
              <header>
                <h4>{food.title}</h4>
                <p className="price">${food.price}</p>
              </header>
              <p className="item-text">{food.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
