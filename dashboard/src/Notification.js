import React from 'react'
import './Notification.css'
import avatar from './images/Avatar.png'
import avatar2 from './images/Avatar-1.png'
function Notification() {
    return (
        <div className='notification'>
            <h3>Notification</h3>
            <div className='notification__Cards'>
                <div className='notification__Card'>
                    <img src={avatar}/>
                    <div className='notification__CardContent'>
                        <h3>Clifford Hofe
                            <span>Sent you a message</span>
                        </h3>
                        <p className='notification__Message'>Hallo bro anak wes piro saiki? wes kuliah urung?…
                        </p>
                        <p className='notification__Time'>2 hours ago</p>
                    </div>
                </div>
                <div className='notification__Card'>
                    <img src={avatar}/>
                    <div className='notification__CardContent'>
                        <h3>Clifford Hofe
                            <span>Sent you a message</span>
                        </h3>
                        <p className='notification__Message'>Hallo bro anak wes piro saiki? wes kuliah urung?…
                        </p>
                        <p className='notification__Time'>2 hours ago</p>
                    </div>
                </div>

            </div>



                <div className='notification__Card coin'>
                <img src={ avatar2}/>
                    <div className='notification__CardContent'>
                        <h3>Lottie Marsh
                            <span>Sent you a coin</span>
                        </h3>
                        <p className='notification__Message'>Bro iki nggo tuku es anakmu yo, ojo dinggo judi neh!!
                       
                        </p>
                        <div className='notification__Extra'>
                            <p className='notification__Price'>+380.234%</p>
                            <p className='notification__CoinName'> LTC</p>
                            <a href='#'>Open my wallet</a>
                    </div>
                        <p className='notification__Time'>2 hours ago</p>
                    </div>
                </div>
        
            <button className='notification__Button'>See all</button>
        </div>
    )
}

export default Notification
