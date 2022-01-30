import React from 'react';
import './PackagesCard.css'
function PackagesCard({
    title,
    about,
    options,
    link,
    linkText
}) {
    return <div className='packagesCard'>
        <h3 className="packagesCard__Title">
            {title} </h3>
        <h4 className="packagesCard__About">
            {about} </h4>
        <ul className="packagesCard__Options">
            {
            options.map(option => <li className="packagesCard__Option">
                <img src="" alt=""/>
                <p> {option}</p>
            </li>)
        } </ul>

        <a href={link}
            className="packagesCard__Link">
            {linkText}</a>
    </div>;
}

export default PackagesCard;
