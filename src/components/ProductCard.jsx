import React from 'react'

// PRODUCT CARD
// reusable component for one item: picture, name, price, and an add to cart button
// props.product is the item, props.addToCart is the function that adds it to the cart
function ProductCard(props) {
    let product = props.product

    // clicking the button passes this card's product to addToCart
    return (
        <div className="product-card">
            <img src={product.image} />
            <p className="product-name">{product.name}</p>
            <p className="product-price">₱{product.price}</p>
            <button className="cart-button" onClick={() => props.addToCart(product)}>Add to cart</button>
        </div>
    )
}

export default ProductCard
