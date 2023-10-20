import React from 'react';
import Particle from './components/particle';
import Avatar from '../../assets/images/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faBootstrap, faCss3Alt, faGithub, faHtml5, faReact, faSass, faSquareJs } from '@fortawesome/free-brands-svg-icons';



const Home = () => {

    return (
        <div className="container-fluid wrapper spacer">
            <section className="my-home container">
                <div className="home">
                    <h1 className="f-b-bold">
                        Frontend<br />Developer
                    </h1>
                    <h3 className="f-bold">
                        Hey! I'm Karol Krych. A passionate Frontend Developer based in Łódź, Poland. I like to build things for the web.
                    </h3>
                    <a href="https://github.com/krychkarol" target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
                    <div className="tech f-bold">
                        <span>
                            TECH<br />STACK
                        </span>
                        <div>
                            <FontAwesomeIcon icon={faHtml5} style={{ color: "#e34c26" }} />
                            <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#264de4" }} />
                            <FontAwesomeIcon icon={faSquareJs} style={{ color: "#f0db4f" }} />
                            <FontAwesomeIcon icon={faReact} style={{ color: "#61dbfb" }} />
                            <FontAwesomeIcon icon={faAngular} style={{ color: "#dd1b16" }} />
                            <FontAwesomeIcon icon={faBootstrap} style={{ color: "#563d7c" }} />
                            <FontAwesomeIcon icon={faSass} style={{ color: "#cc6699" }} />
                        </div>
                    </div>
                </div>
                <div className="avatar">
                    <img src={Avatar} alt="" />
                </div>
            </section>
            <div className="particle">
                <Particle />
            </div>
        </div>


    )

}

export default Home