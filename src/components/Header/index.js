import React from 'react'

import './index.css'

import me from '../../assets/header/Me.png'

export default function Header() {
    return (
        <header>
            <section className="section-header">
                <div className='pht'>
                    <img src={me} alt='My photo' className='photo size-photo img-fluid' />
                </div>
                <div className="my-datas">
                    <div className='name'>André F. Bispo</div>
                    <div className='graduation'>Software Engineer</div>
                </div>

                <div className='header-buttons'>
                    <a href='#' className="portfolio">Portfolio</a>
                    <a href='#' className="what-i-do">What I do?</a>
                </div>

            </section>
        </header>
    )
}