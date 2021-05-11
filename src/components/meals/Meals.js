import React from "react";
import MealItem from "./MealItem";

const Meals = (props) => {
  const container = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid gray",
    margin: "25px 25px 25px 25px",
    // padding: "25px 25px 25px 25px",
  };

  const mealData = [
    { id: 1, name: "Sushi", desc: "Some fine ass fish...", price: 200 },
    {
      id: 2,
      name: "Meats",
      desc: "Just out here, smoking these meats",
      price: 56.99,
    },
    { id: 3, name: "Pasta", desc: "Only cheese allowed! >:(", price: 12.99 },
    {
      id: 4,
      name: "David",
      desc: "Shoutout to his family 🙏",
      price: 132.99,
    },
  ];

  return (
    <div
      // @ts-ignore
      style={container}
    >
      {mealData.map((meal) => (
        <MealItem key={meal.id} item={meal}></MealItem>
      ))}
    </div>
  );
};

export default Meals;
