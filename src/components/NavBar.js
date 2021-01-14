import React from 'react'
import CartWidget from './CartWidget';
import './navbar.css'


const NavBar = () =>{
    return (
        <div className="navbar">
            <div className="logo">
                LOGO
            </div>
            <ul className="listItems">
                <li><a href="#">HOME</a></li>
                <li><a href="#">item2</a></li>
                <li><a href="#">item3</a></li>
                <li><a href="#"><CartWidget /></a></li>
            </ul>
        </div>
    )
}

export default NavBar;