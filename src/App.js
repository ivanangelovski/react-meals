import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Meals from "./components/meals/Meals";
import Header from "./Header";
import CartContext from "./context/CartContext";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (itemId, amount) => {
    setCartItems((oldCartItems) => [
      ...oldCartItems,
      { id: itemId, amount: amount },
    ]);
  };

  return (
    <div className="App">
      <CartContext.Provider
        value={{
          cartItems: cartItems,
          addCartItem: addCartItem,
        }}
      >
        <Router>
          <Header />
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Meals />
            </Route>
          </Switch>
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;
