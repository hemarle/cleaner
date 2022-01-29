import React from 'react';
import Hero from './Hero';
import './Landing.css'

import broomIcon from './images/broom.svg'
import heroIcon from './images/hero-bg.png'
function Landing() {
    return <div className='landing'>
        <Hero title='Welcome to Khadi
                                                                    Interiors & Cleaning
                                                                    Services' about='Let’s do your dirty work' linkText='Book Now'
            icon={broomIcon}
            image={heroIcon}/>
    </div>;
}

export default Landing;
