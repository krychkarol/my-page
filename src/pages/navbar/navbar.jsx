import React, { useState } from 'react'
import '../navbar/_navbar.scss'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
        <section className="my-navbar container-fluid">
            <div className="name f-special">krychkarol</div>
            <div className="menu-desktop d-none d-lg-block">
                <ul className="f-bold">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="menu-mobile d-lg-none">
                <div className={!isMenuOpen ? "hamburger-icon" : "hamburger-icon is-open"} onClick={menuToggler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={!isMenuOpen ? "menu-mobile-dropdown d-lg-none" : "menu-mobile-dropdown is-open d-lg-none"}>
                <ul className="f-bold">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar