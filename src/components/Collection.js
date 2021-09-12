import React from 'react'
import Product from './Product'
const Collection = ({ collection, removeProduct }) => {
  return (
    <section>
      <h1>Our Collection</h1>
      <div>
        {collection.map((product) => {
          return (
            <Product
              key={product.id}
              {...product}
              removeProduct={removeProduct}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Collection
