import React from 'react'
import Dashboard from './Dashboard'
import History from './History'
import './Main.css'
import Popup from './Popup'
function Main() {
    return (
        <div className='main'>
            <Dashboard />
            <History />
            <Popup/>
        </div>
    )
}

export default Main
