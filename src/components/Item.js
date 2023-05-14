import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);
  const cartClass = inCart ? "in-cart" : "";
  const cartText = inCart ? "Remove from Cart" : "Add to Cart";

  function isInCart()
  {
    setInCart(!inCart);
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={isInCart} className="add">{cartText}</button>
    </li>
  );
}

export default Item;
