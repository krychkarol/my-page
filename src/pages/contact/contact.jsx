import React from 'react'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    return (
        <section className="my-contact container spacer">
            <div className="wrapper">
                <h2 className="f-b-bold">
                    Contact Me
                </h2>
                <h3 className="f-bold">
                    If you want to get in touch or just say Hi, please click envelope below to contact me. I would love to hear from you!
                </h3>
                <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} onClick={() => { window.location.href = 'mailto:example@email.com' }} />
                </div>
            </div>
        </section>
    )
}

export default Contact