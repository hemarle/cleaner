import React from 'react';
import './App.css';
import illustration from './images/illustration-mockups.svg'
import logo from './images/logo.svg'
function App() {
  return (
    <div className="app">
      <div className='app__Title'>
        {/* <img src={logo}/> */}
        <h3>Huddle</h3>
      </div>

   <div className='app__Body'>
   <div className='app__Image'>
    <span></span>
        <img src={illustration}/>
      </div>

      <div className='app__Content'>
        <h2>  Build The Community Your Fans Will Love</h2>
        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
  Create connections with your users as you engage in genuine discussion. 
</p>
        <button><div>Register</div></button>
      </div>

   </div>

      <div className='app__Social'></div>
     
    </div>
  );
}

export default App;
