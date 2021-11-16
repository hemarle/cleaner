import React from 'react';import './App.css';
import top from './images/bg-pattern-top.svg'
import bottom from './images/bg-pattern-bottom.svg'
import victor from './images/image-victor.jpg'
import backg from './images/bg-pattern-card.svg'
function App() {
  return (
    <div className="app">
      <span className='app__Top'><img src={top}/> </span>
      {/* <span className='app__Bottom'><img src={bottom}/></span> */}
     <div className='app__Card'>
       <div><img src={backg}/></div>
       <img src={victor}/>
       <h2>Victor Crest <span>26</span></h2>
        <p>London</p>
        <div className='app__Others'>
          <div className='app__Other'>
            <h2>80K</h2>
            <p>Followers</p>
          </div>

          <div className='app__Other'>
            <h2>803K</h2>
            <p>Likes</p>
          </div>

          <div className='app__Other'>
            <h2>1.4K</h2>
            <p>Photos</p>
          </div>

        </div>
     </div>

    </div>
  );
}

export default App;
