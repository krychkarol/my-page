import React from 'react';
import Particle from './components/particle';
import Avatar from '../../assets/images/avatar.png'



const Home = () => {

    return (
        <div className="container-fluid test">
            <section className="my-home container">
                <div className="home">
                    <h1 className="f-b-bold">
                        Frontend<br />Developer
                    </h1>
                    <h2 className="f-bold">
                        Hey, I'm Karol Krych. A passionate Frontend Developer based in Łódź, Poland. I like to build things for the web and I am fascinated by latest technologies.
                    </h2>
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