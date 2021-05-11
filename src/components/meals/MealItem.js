import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import MealButtons from "./MealButtons";
import MealDetails from "./MealDetails";

const MealItem = (props) => {
  const container = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid gray",
    margin: "25px 25px 25px 25px",
    padding: "25px 25px 25px 25px",
  };
  const row = {
    display: "flex",
    flexDirection: "row",
    border: "1px solid gray",
    margin: "25px 25px 25px 25px",
    justifyContent: "space-between",
  };

  const cardCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    console.log("addtocart handler", props.item.name, amount);
    cardCtx.addCartItem(props.item.id, amount);
  };

  return (
    <div
      // @ts-ignore
      style={row}
    >
      <div
        // @ts-ignore
        style={container}
      >
        <MealDetails item={props.item}></MealDetails>
      </div>
      <div
        // @ts-ignore
        style={container}
      >
        <MealButtons onAddToCart={addToCartHandler}></MealButtons>
      </div>
    </div>
  );
};

export default MealItem;
