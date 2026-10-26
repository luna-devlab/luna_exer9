import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

// MAIN APP COMPONENT
// puts the header, the product list, and the cart together to make the homepage
// the cart state lives here so both ProductList and Cart can use it
function App() {
    // navigation buttons
    const menus = [
        { name: "Appliances", url: "#", id: 1 },
        { name: "Groceries", url: "#", id: 2 },
        { name: "Gadgets", url: "#", id: 3 },
        { name: "Clothing", url: "#", id: 4 },
    ]

    // INITIAL STATE OF THE MARKET
    // the 4 items sold in the store, images are inside the public/images folder
    // no setter since the items in the market don't change
    const [products] = useState([
        { name: "Hanabishi Rice Cooker HHRC14FSHA 1.4L 7 cups", price: 1300, image: "images/rice-cooker.webp", id: 1 },
        { name: "Asahi PF 840 Stand Fan 18 inches", price: 2690, image: "images/electric-fan.webp", id: 2 },
        { name: "Fujidenzo 3.5 cu. ft. HD Inverter Two-Door Ref IRD-35G (Dark Titanium)", price: 9798, image: "images/refrigerator.webp", id: 3 },
        { name: "American Home AMW-ST1920W 20Liters Microwave Gray Interior", price: 3230, image: "images/microwave.webp", id: 4 },
    ])

    // the cart starts empty, cart is the current list and setCart updates it
    const [cart, setCart] = useState([])

    // ADDING AN ITEM TO THE CART
    // if the item is already in the cart, its qty goes up by 1
    // if not, it's added as a new item with qty 1
    function addToCart(product) {
        setCart((prev) => {
            const newCart = []
            let found = false

            for (let a = 0; a < prev.length; a++) {
                if (prev[a].id === product.id) {
                    // same item, copy it but add 1 to the qty
                    newCart.push({ ...prev[a], qty: prev[a].qty + 1 })
                    found = true
                } else {
                    newCart.push(prev[a])
                }
            }

            // wala pa sa cart, so add it at the end with qty 1
            if (found === false) {
                newCart.push({ ...product, qty: 1 })
            }

            return newCart
        })
    }

    // DELETING AN ITEM FROM THE CART
    // keeps every item except the one whose delete button was clicked
    function deleteFromCart(id) {
        setCart((prev) => {
            const newCart = []

            for (let a = 0; a < prev.length; a++) {
                if (prev[a].id === id) {
                    // this is the deleted item, skip lang
                } else {
                    newCart.push(prev[a])
                }
            }

            return newCart
        })
    }

    return (
        <div>
            <Header title={"Lazado"} menus={menus} />

            <div className="body">
                <ProductList products={products} addToCart={addToCart} />
                <Cart cart={cart} deleteFromCart={deleteFromCart} />
            </div>
        </div>
    )
}

export default App
