import React, { useState } from 'react'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        console.log(element)
        if (element) {
            //element.scrollIntoView({ behavior: 'smooth',  });
            window.scrollTo(element.getBoundingClientRect().left, element.getBoundingClientRect().top + window.scrollY - 150);
        }
        if (isMenuOpen) {
            setIsMenuOpen(!isMenuOpen)
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        if (isMenuOpen) {
            setIsMenuOpen(!isMenuOpen)
        }
    }

    return (
        <section className="my-navbar container-fluid sticky-top">
            <div className="name f-special">krychkarol</div>
            <div className="menu-desktop d-none d-lg-block">
                <ul className="f-bold">
                    <li onClick={() => handleScrollToTop()}>Home</li>
                    <li onClick={() => handleClickScroll("about")}>About</li>
                    <li onClick={() => handleClickScroll("projects")}>Projects</li>
                    <li onClick={() => handleClickScroll("contact")}>Contact</li>
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
                    <li onClick={() => handleScrollToTop()}>Home</li>
                    <li onClick={() => handleClickScroll("about")}>About</li>
                    <li onClick={() => handleClickScroll("projects")}>Projects</li>
                    <li onClick={() => handleClickScroll("contact")}>Contact</li>
                </ul>
            </div>
        </section >
    )
}

export default Navbar