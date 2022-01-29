import React from 'react';
import './Hero.css'
function Hero({
    title,
    about,
    icon,
    image,
    link,
    linkText
}) {
    return <div className='hero'>
        <div className="hero__Content">
            <h2 className="hero__Title">
                {title} </h2>
            <p className="hero__About">
                {about}
                <span>
                    <img src={icon}
                        alt=""/></span>
            </p>
            <a href={link}
                className="hero__Link">
                {linkText}</a>
        </div>

        <div className="hero__Image">
            {image} </div>
    </div>;
}

export default Hero;
