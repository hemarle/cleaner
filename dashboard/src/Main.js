import React from 'react'
import Dashboard from './Dashboard'
import Graph from './Graph'
import History from './History'
import './Main.css'
import Popup from './Popup'
import Trend from './Trend'
function Main() {
    return (
        <div className='main'>
            <Dashboard />
            <History />
            <Popup />
            <Trend />
            <Graph/>
        </div>
    )
}

export default Main
