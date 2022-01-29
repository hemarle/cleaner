import React from 'react'
import './Trend.css'
import path from './images/Path.png'
import icn from './images/Icn.png'
function Trend() {
    return (
        <div className='trend'>
            <div className='trend__Cards'>
            <div className='trend__Card'>
                <div className='trend__CardHeader'>
                    <p>LTC</p>
                    <img className='trend__Icn' src={icn} />
                    <p >USD</p>
                    <p className='trend__Change'>+75.69%</p>
                </div>
                <h4>104,23</h4>
                    <div className='trend__Image'>
                    <img src={path} />
                    <div className='glow'></div>
                    </div>
            </div>
            <div className='trend__Card'>
                <div className='trend__CardHeader'>
                    <p>LTC</p>
                    <img className='trend__Icn' src={icn} />
                    <p >USD</p>
                    <p className='trend__Change'>+75.69%</p>
                </div>
                <h4>104,23</h4>
                    <div className='trend__Image'>
                    <img src={path} />
                    <div className='glow'></div>
                    </div>
            </div>
            <div className='trend__Card'>
                <div className='trend__CardHeader'>
                    <p>LTC</p>
                    <img className='trend__Icn' src={icn} />
                    <p >USD</p>
                    <p className='trend__Change'>+75.69%</p>
                </div>
                <h4>104,23</h4>
                    <div className='trend__Image'>
                    <img src={path} />
                    <div className='glow'></div>
                    </div>
            </div>
            <div className='trend__Card'>
                <div className='trend__CardHeader'>
                    <p>LTC</p>
                    <img className='trend__Icn' src={icn} />
                    <p >USD</p>
                    <p className='trend__Change'>+75.69%</p>
                </div>
                <h4>104,23</h4>
                    <div className='trend__Image'>
                    <img src={path} />
                    <div className='glow'></div>
                    </div>
            </div>
          </div>
        </div>
    )
}

export default Trend
