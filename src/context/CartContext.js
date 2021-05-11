import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  addCartItem: (itemId, amount) => {},
});

export default CartContext;
