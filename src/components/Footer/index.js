import React from 'react'

import './index.css'

import instagram from '../../assets/footer/instagram.svg'
import linkedin from '../../assets/footer/linkedin.svg'
import github from '../../assets/footer/github.svg'
import email from '../../assets/footer/email.svg'

export default function Footer() {
    return (
        <footer>
            <section className="section-footer">
                <div className="follow-me">
                    Contact me
           </div>
                <div className="social-media">
                    <a href='https://www.instagram.com/dev.andref/' target='_blank'><img src={instagram} alt="Instagram" className="instagram" /></a>
                    <a href='https://www.linkedin.com/in/andrefbispo/' target='_blank'><img src={linkedin} alt="Linkedin" className="linkedin" /></a>
                    <a href='https://github.com/Andrefer1' target='_blank'><img src={github} alt="GitHub" className="github" /></a>
                    <a href='' target='_blank'><img src={email} alt="Email" className="email" /></a>
                </div>
                <div className="message">
                    Made by ANDRÉ®
           </div>
            </section>
        </footer>
    )
}