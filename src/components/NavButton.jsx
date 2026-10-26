import React from 'react'

// NAVIGATION BUTTON
// reusable component for each button in the navigation panel
// props.name is the text shown, props.url is where it goes
function NavButton(props) {
    return (
        <a className="nav-button" href={props.url}>{props.name}</a>
    )
}

export default NavButton
