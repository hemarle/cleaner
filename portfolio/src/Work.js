import React from 'react'
import './Work.css'
import worker from './assets/human.png'
function Work({first, title='Featured works'}) {
    return (
        <div className='work'>
            {
                first&&<h3 className='work__Header'>{title}</h3>
            
            }
            <div className='work__Container'>
            <img className='work__Image' src={worker} alt='work__image' />
            
            <div className='work__Content'>
                <h2 className='work__Title'>Space</h2>
                <p className='work__Tag'><span className='work__Year'>2020 </span><span className='work__Label'>Dashboard</span></p>
                <p className='work__About'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>

            </div>
        </div>
    )
}

export default Work
