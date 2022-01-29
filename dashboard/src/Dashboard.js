import React from 'react'
import './Dashboard.css'
import bitcoin from './images/Bitcoin.png'
import eth from './images/ETH.png'
import lite from './images/Litecoin.png'
import graph from './images/Graph.png'
import Notification from './Notification'
import Header from './Header'
function Dashboard() {
    return (
        <div className='dashboard'>
           <Header title='Dashboard' about='With all of the styling tool options available in today’s market'/>
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
                                <p className='dashboard__CryptoPercentage'>+ 12.5%</p>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard__Card'>
                        <img src={eth}/>
                        <div className='dashboard__CardRight'>
                            <p className='dashboard__CryptoPrice'>
                               23.234
                                <span className='dashboard__CryptoName'>ETH</span>
                            </p>
                            <div className='dashboard__CryptoChange'><img src={graph}/>
                                <p className='dashboard__CryptoPercentage'>- 5.23%</p>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard__Card'>
                        <img src={lite}/>
                        <div className='dashboard__CardRight'>
                            <p className='dashboard__CryptoPrice'>
                               380.234
                                <span className='dashboard__CryptoName'>LTC</span>
                            </p>
                            <div className='dashboard__CryptoChange'><img src={graph}/>
                                <p className='dashboard__CryptoPercentage'>+ 39.69%</p>
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
