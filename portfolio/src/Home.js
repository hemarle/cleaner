import React from 'react'
import './Home.css'
import femi from './assets/human.png'
function Home() {
    return (
        <div className='home'>
            <img  className='home__Image' src={femi} alt='femi image' />
         
            <div className='home__Content'>
            
            <h1 className='home__Name'>Hi, I am Femi</h1>
            <h1 className='home__Role'>Web developer</h1>
            <p className='home__About'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button className='home__Button'><p>Download Resume</p></button>
                
            </div>
        </div>
    )
}

export default Home
