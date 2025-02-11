import React from "react";

const MenuItem = ({ itemId, itemPrice, itemName, itemDescription }) => {
  return (
    <div className="menu-item" id={`menu-item-${itemId}`}>
      <span>${itemPrice}</span>
      <h2>{itemName}</h2>
      <p>{itemDescription}</p>
      <button>Add to Cart</button>
    </div>
    /*This gives a more html feel and layout for where the itmes
    are located.  Button does nothing */
  );
};

export default MenuItem;