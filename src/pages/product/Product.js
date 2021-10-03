import React from "react";

import "./ProductStyle.css";
const Product = ({
  id,
  image,
  title,
  category,
  description,
  price,
  removeProduct,
}) => {
  return (
    <article>
      <img src={image} alt="articleimage" width="100" height="100" />
      <h3>{title}</h3>
      <h4>{category}</h4>
      {/* <p>Description: {description}</p> */}
      <h4>Price: ${price}</h4>
      <button onClick={() => removeProduct(id)}>Remove</button>
      <hr />
    </article>
  );
};
export default Product;
