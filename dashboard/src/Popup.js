import React from 'react'
import './Popup.css'
import popupIcon from './images/Icon.png'
function Popup() {
    return (
        <div className='popup'>
            <img src={popupIcon} />
            <p>You just earned <span>0.02343</span> BTC</p>
            <a href='#'>See history</a>

            <button>Dismiss</button>
        </div>
    )
}

export default Popup
