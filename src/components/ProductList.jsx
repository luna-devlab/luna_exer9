import React from 'react'
import ProductCard from './ProductCard'

// PRODUCT LIST
// body of the homepage, shows one ProductCard for each item
// props.products is the list of items, props.addToCart is passed down to each card
function ProductList(props) {
    let products = props.products

    return (
        <div className="product-list">
            {
                // one ProductCard for each product, key is the product id para unique
                products.map((product) => {
                    return <ProductCard key={product.id} product={product} addToCart={props.addToCart} />
                })
            }
        </div>
    )
}

export default ProductList
