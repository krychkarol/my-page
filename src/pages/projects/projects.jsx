import React from 'react';
import Brodacz from '../../assets/images/brodacz.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <section className="my-projects container spacer">
            <div className="info">
                <h2 className="f-b-bold">Projects</h2>
                {/* coś jeszcze ? */}
            </div>
            {/* map */}
            <div className="project">
                <div className="photo">
                    <img src={Brodacz} alt="brodacz" />
                </div>
                <div className="text">
                    <h2 className="f-b-bold">Brodacz</h2>
                    <h3 className="f-bold">
                        Full stack E-Commerce application with login / register users,
                        shopping cart, products search, payment method and an admin panel
                        that allows you to manage products,orders, users, categories or
                        even a carousel.
                    </h3>
                    <span className="f-bold">
                        React, Node, Express, MongoDB, Redux, JWT, Stripe, Firebase, MUI, RWD, RestAPI
                    </span>
                    <div className="links">
                        <a href="https://github.com/krychkarol/brodacz-ecommerce-store" target='_blank' rel="noreferrer">
                            <h3 className="f-bold">
                                Code
                                <FontAwesomeIcon icon={faCode} className="icon" />
                            </h3>
                        </a>
                        <a href="https://brodacz.krychkarol.pl/" target='_blank' rel="noreferrer">
                            <h3 className="f-bold">
                                Live
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
                            </h3>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects