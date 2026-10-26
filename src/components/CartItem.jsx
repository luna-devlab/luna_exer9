import React from 'react'

// CART ITEM
// one row in the cart: item name, qty, and a delete button
// props.item is the item, props.deleteFromCart removes it from the cart
function CartItem(props) {
    let item = props.item

    // clicking the X passes this item's id to deleteFromCart
    return (
        <div className="cart-item">
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-qty">x{item.qty}</p>
            <button className="delete-button" onClick={() => props.deleteFromCart(item.id)}>X</button>
        </div>
    )
}

export default CartItem
