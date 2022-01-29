import React, {useRef} from 'react'
import './Popup.css'
import popupIcon from './images/Icon.png'
function Popup() {
    let popupRef=useRef()
    function popupFunc(e) {
        console.log(popupRef)
        popupRef.current.style.display='none'
    }
    return (
        <div ref={popupRef} className='popup'>
            <img src={popupIcon} />
            <p>You just earned <span>0.02343</span> BTC</p>
            <a href='#'>See history</a>

            <button onClick={popupFunc}>Dismiss</button>
        </div>
    )
}

export default Popup
