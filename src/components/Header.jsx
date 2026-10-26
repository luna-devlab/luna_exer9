import React from 'react'
import NavButton from './NavButton'

// HEADER
// shows the store name on the left and the navigation panel on the right
// props.title is the store name, props.menus is the list of navigation buttons
function Header(props) {
    let menus = props.menus

    return (
        <div className="header">
            <h1 className="store-name">{props.title}</h1>

            <div className="nav">
                {
                    // one NavButton for each menu, key is the menu id para unique
                    menus.map((menu) => {
                        return <NavButton key={menu.id} name={menu.name} url={menu.url} />
                    })
                }
            </div>
        </div>
    )
}

export default Header
