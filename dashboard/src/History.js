import React from 'react'
import './History.css'
import bitcoin from './images/Bitcoin.png'
import eth from './images/ETH.png'
import lite from './images/Litecoin.png'
function History() {
    return (
        <div className='history'>
            <div className='history__Header'>
                <h2>History</h2>
                <button>See all</button>

            </div>
            <div className='history__Cards'>
                <div className='history__Card'>
                    <div className='history__Image'>

                        <img src={bitcoin}/>
                    </div>
                    <h6 className='history__Name'>Akins dayd
                    </h6>
                    <p className='history__Change'>+ 0.025</p>
                    <p className='history__Date'>
                        08/28/2021</p>
                </div>
   
                <div className='history__Card'>
                    <div className='history__Image'>

                        <img src={lite}/>
                    </div>
                    <h6 className='history__Name'>Akins dayd
                    </h6>
                    <p className='history__Change'>+ 0.025</p>
                    <p className='history__Date'>
                        08/28/2021</p>
                </div>
                <div className='history__Card'>
                    <div className='history__Image'>

                        <img src={eth}/>
                    </div>
                    <h6 className='history__Name'>Akins dayd
                    </h6>
                    <p className='history__Change'>+ 0.025</p>
                    <p className='history__Date'>
                        08/28/2021</p>
                </div>
                <div className='history__Card'>
                    <div className='history__Image'>

                        <img src={eth}/>
                    </div>
                    <h6 className='history__Name'>Akins dayd
                    </h6>
                    <p className='history__Change'>+ 0.025</p>
                    <p className='history__Date'>
                        08/28/2021</p>
                </div>
                <div className='history__Card'>
                    <div className='history__Image'>

                        <img src={eth}/>
                    </div>
                    <h6 className='history__Name'>Akins dayd
                    </h6>
                    <p className='history__Change'>+ 0.025</p>
                    <p className='history__Date'>
                        08/28/2021</p>
                </div>
            </div>


        </div>
    )
}

export default History
