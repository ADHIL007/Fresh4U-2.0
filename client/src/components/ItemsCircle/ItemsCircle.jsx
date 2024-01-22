import React from "react";
import "./ItemsCircle.css";
import meat from "../../assets/backgrounds/meat.jpeg";
import veg from "../../assets/backgrounds/vegetables.jpeg";
import fruits from "../../assets/backgrounds/fruits.jpeg";
import dairy from "../../assets/backgrounds/milk.jpeg";

function ItemsCircle() {
  const data = [
    {
      title: "Meat",
      imgUrl: meat,
      link: "/meat-section",
    },
    {
      title: "Vegetables",
      imgUrl: veg,
      link: "/vegetables-section",
    },
    {
      title: "Fruits",
      imgUrl: fruits,
      link: "/fruits-section",
    },
    {
      title: "Dairy",
      imgUrl: dairy,
      link: "/dairy-section",
    },
  ];

  return (
    <div className="items">
      {data.map((item, index) => (
        <a href={item.link} key={index} className="item">
          <img src={item.imgUrl} alt={item.title} />
          <p>{item.title}</p>
        </a>
      ))}
    </div>
  );
}

export default ItemsCircle;
