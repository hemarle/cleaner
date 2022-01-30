import React from 'react';
import './Ceo.css'
function Ceo({image, title, about}) {
    return <div className='ceo'>
        <div className="ceo__Left">
            <img src={image}
                alt=""/>
        </div>

        <div className="ceo__Right">
            <h3 className="ceo__Title">
                {title}</h3>
            <p className="ceo__About">
                {about} </p>

        </div>
    </div>;
}

export default Ceo;
