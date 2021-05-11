import React, { useState } from "react";

const MealButtons = (props) => {
  const [numberState, setNumberState] = useState(1);

  const onChangeHandler = (event) => {
    setNumberState(event.target.value);
  };

  const addToCart = () => {
    props.onAddToCart(numberState);
  };

  return (
    <div>
      <input
        min="1"
        type="number"
        value={numberState}
        onChange={onChangeHandler}
      ></input>
      <button onClick={addToCart}>+Add</button>
    </div>
  );
};

export default MealButtons;
