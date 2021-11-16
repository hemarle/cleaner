import React from 'react'
import './Navigation.css'
import logo from './images/Logo.png'
import dashboard from './images/Dashboard.png'
import wallet from './images/Wallet.png'
import message from './images/Message.png'
import trade from './images/Trade.png'
import account from './images/Account.png'
function Navigation() {
    return (
        <div className='navigation'>
            <div className='navigation__Header'>
                <img src={logo} alt='image logo' className='navigation__Image'/>
                <h2 className='navigation__Title'>FMBTC</h2>
            </div>

            <div className='navigation__Body'>
                <div className='navigation__Link'>
                    <img src={dashboard} alt='dashboard' />
                    <p className='navigation__LinkText'> Dashboard</p>
                </div>
                <div className='navigation__Link'>
                    <img src={wallet} alt='wallet' />
                    <p className='navigation__LinkText'> Wallet</p>
                </div>
                <div className='navigation__Link'>
                    <img src={message} alt='Messages' />
                    <p className='navigation__LinkText'> Messages</p>
                </div>
                <div className='navigation__Link'>
                    <img src={trade} alt='Trade' />
                    <p className='navigation__LinkText'> Trade</p>
                </div>
                <div className='navigation__Link'>
                    <img src={account} alt='Account Setting' />
                    <p className='navigation__LinkText'> Account Setting</p>
                </div>
            </div>
        </div>
    )
}

export default Navigation
