import React from 'react'
import './Header.css'
import search from './images/Search.png'
import menuIcon from './images/Menu.png'
import bell from './images/Bell.png'
import face from './images/Face.png'
import down from './images/Down.png'
function Header({title,about}) {
    return (
        <div className='header'>
        
            <div className='header__Left'>
            <div className='header__Title'>
                    <h1> { title} </h1>
                    <p> {about }</p>
            </div>
            </div>
            <div className='header__Right'>
                <img src={search} alt='search__Icon'/>
                <img className='header__Menu' src={menuIcon} />
                <div className='header__Bell'>

                    <img className='header__BellIcon' src={bell} />
                    <p>3</p>
                </div>
            <img className='header__Avatar' src={face} />
            {/* <img className='header__Down' src={down} /> */}
            </div>
        </div>
    )
}

export default Header
