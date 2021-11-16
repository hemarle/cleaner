import React from 'react'
import './Dashboard.css'
import bitcoin from './images/Bitcoin.png'
import eth from './images/ETH.png'
import lite from './images/Litecoin.png'
import graph from './images/Graph.png'
import Notification from './Notification'
function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='dashboard__Header'>
                <h1>Dashboard</h1>
                <p>With all of the styling tool options available in today’s market</p>
            </div>
            <div className='dashboard__Wallet'>
                <h3>WALLETS</h3>

                <div className='dashboard__Cards'>
                    <div className='dashboard__Card'>
                        <img src={bitcoin}/>
                        <div className='dashboard__CardRight'>
                            <p className='dashboard__CryptoPrice'>
                                1.9678
                                <span className='dashboard__CryptoName'>BTC</span>
                            </p>
                            <div className='dashboard__CryptoChange'><img src={graph}/>
                                <p className='dashboard__CryptoPercentage'>2.376%</p>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard__Card'>
                        <img src={eth}/>
                        <div className='dashboard__CardRight'>
                            <p className='dashboard__CryptoPrice'>
                                1.9678
                                <span className='dashboard__CryptoName'>BTC</span>
                            </p>
                            <div className='dashboard__CryptoChange'><img src={graph}/>
                                <p className='dashboard__CryptoPercentage'>2.376%</p>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard__Card'>
                        <img src={lite}/>
                        <div className='dashboard__CardRight'>
                            <p className='dashboard__CryptoPrice'>
                                1.9678
                                <span className='dashboard__CryptoName'>BTC</span>
                            </p>
                            <div className='dashboard__CryptoChange'><img src={graph}/>
                                <p className='dashboard__CryptoPercentage'>2.376%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Notification/>
        </div>
    )
}

export default Dashboard
