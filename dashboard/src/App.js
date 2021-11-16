import React from 'react';
import './App.css';
import Main from './Main'
import Navigation from './Navigation';

function App() {
    return (
        <div className="app">
            <div className='app__Left'>
                <Navigation/>
            </div>
            <div className='app__Right'>
                <Main/>
            </div>
        </div>
    );
}

export default App;
