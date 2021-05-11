// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const container = {
    display: "flex",
    flexDirection: "row",
    border: "1px solid gray",
    margin: "25px 25px 25px 25px",
    padding: "25px 25px 25px 25px",
    justifyContent: "space-between",
  };
  const links = {
    display: "flex",
    flexDirection: "flex-end",
    // border: "1px solid gray",
    // margin: "25px 25px 25px 25px",
    // padding: "25px 25px 25px 25px",
    width: "20%",
    justifyContent: "space-evenly",
  };

  return (
    <header
      // @ts-ignore
      style={container}
    >
      <h2>ReactMeals</h2>
      <div style={links}>
        <h3>
          <Link to="/">Meals</Link>
        </h3>
        <h3>
          <Link to="cart">Cart</Link>
        </h3>
      </div>
    </header>
  );
};

export default Header;
