import React from 'react';
import Photo from '../../assets/images/about.jpg';

const About = () => {
    return (
        <section className="my-about container spacer">
            <div className="photo">
                <img src={Photo} alt="" />
            </div>
            <div className="about">
                <h2 className="f-b-bold">
                    About Me
                </h2>
                <h3 className="f-bold">
                    I am a graduate of the Lodz University of Technology, in the field of electronics and telecommunication.
                    Fascinated by the latest technologies and web  development, I decided to try myself at programming.
                    I am hungry for knowledge and challenges.
                    Ready to gain new experience and test the skills I have acquired so far and which I constantly improve.
                </h3>
            </div>
        </section>
    )
}

export default About