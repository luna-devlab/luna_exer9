import React from 'react'
import CartItem from './CartItem'

// CART
// shopping cart on the right side: shows the total and one CartItem for each item added
// props.cart is the list of items in the cart, props.deleteFromCart removes an item
function Cart(props) {
    let cart = props.cart

    // counting the total number of items (adds up the qty of each item)
    let total = 0
    for (let a = 0; a < cart.length; a++) {
        total = total + cart[a].qty
    }

    return (
        <div className="cart">
            <h2 className="cart-title">Shopping cart (Total: {total})</h2>
            {
                // one CartItem for each item in the cart, key is the item id para unique
                cart.map((item) => {
                    return <CartItem key={item.id} item={item} deleteFromCart={props.deleteFromCart} />
                })
            }
        </div>
    )
}

export default Cart
