import React from 'react'
import './Nav.css'
import hamburger from './assets/icon-hamburger.svg'
function Nav() {
    return (
        <nav className='nav'>
            <img className='nav__Image' src={hamburger} alt='hamburger' />
            <div className=' remove nav__Content'>
                
                    <p className='nav__Option'>Works</p>
                    <p className='nav__Option'>Contact</p>
                
                
            </div>
        </nav>
    )
}

export default Nav
