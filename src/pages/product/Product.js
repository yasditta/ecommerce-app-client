import React from 'react'

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
      <img src={image} alt='articleimage' width='200' height='200' />
      <h3>Title: {title}</h3>
      <h4>Category: {category}</h4>
      <p>Description: {description}</p>
      <h4>Price: ${price}</h4>
      <button onClick={() => removeProduct(id)}>Remove</button>
      <hr />
    </article>
  )
}
export default Product
