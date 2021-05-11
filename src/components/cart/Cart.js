import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {
  const context = useContext(CartContext);

  console.log("items", context.cartItems);

  return (
    <div>
      {context.cartItems.map((item) => (
        <div key={item.id}>
          ID: {item.id} Amount: {item.amount}
        </div>
      ))}
    </div>
  );
};

export default Cart;
