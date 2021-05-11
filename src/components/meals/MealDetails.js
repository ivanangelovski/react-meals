import React from "react";

const MealDetails = ({ item }) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <h5>{item.desc}</h5>
      <h3>${item.price}</h3>
    </div>
  );
};

export default MealDetails;
