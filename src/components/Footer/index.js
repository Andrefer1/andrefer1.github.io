import React from 'react'

import './index.css'

import instagram from '../../assets/footer/instagram.svg'
import linkedin from '../../assets/footer/linkedin.svg'
import github from '../../assets/footer/github.svg'
import email from '../../assets/footer/email.svg'

export default function Footer() {

    function show_form() {
        var formElement = document.getElementById('form')
        if (formElement.style.display === "none") {
            formElement.style.display = "block";
        }
        else {
            formElement.style.display = "none";
        }
    }

    return (
        <footer>
            <section className="section-footer">
                <div className="contact-me">
                    Contact Me
                </div>
                <div className="hr"></div>

                <div className="social-media">
                    <div className="div-img">
                        <a href='https://www.instagram.com/dev.andref/' target='_blank'>
                            <img src={instagram} alt="Instagram" className="instagram" />
                        </a>

                        <a href='https://www.linkedin.com/in/andrefbispo/' target='_blank'>
                            <img src={linkedin} alt="Linkedin" className="linkedin" />
                        </a>

                        <a href='https://github.com/Andrefer1' target='_blank'>
                            <img src={github} alt="GitHub" className="github" />
                        </a>

                        <div className='div-email' onClick={show_form}>
                            <img src={email} alt="Email" className="email" />
                        </div>
                    </div>

                    <form action="" id='form'>
                        <div className="row">
                            <div className="col">
                                <div className="input-box">
                                    <input type="text" required />
                                    <span className="text">First Name</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-box">
                                    <input type="text" required />
                                    <span className="text">Last Name</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="input-box">
                                    <input type="text" required />
                                    <span className="text">Email</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="input-box textarea">
                                    <textarea required ></textarea>
                                    <span className="text">Type your message here...</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>

                        <div className="row button-send">
                            <div className="col">
                                <input type='submit' value='Send' />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="message">
                    Made by ANDRÉ®
                </div>
            </section>
        </footer>
    )
}