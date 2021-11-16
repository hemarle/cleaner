import React from 'react';
import './App.css';
import star from './images/icon-star.svg'
import colton from './images/image-colton.jpg'
function App() {
  return (
    <div className="app">
      <div className='app__Content'>
        <div className='app__Text'>
          <h1>10,000+ of our users love our products.</h1>
          <p>  We only provide great products combined with excellent customer service.
    See what our satisfied customers are saying about our services.
    </p>
        </div>

                    <div className='app__Stars'>
                      <div className='app__Star'>
                      <img src={star}/> <img src={star}/> <img src={star}/> <img src={star}/> <img src={star}/>
            
            <h3>Rated 5 Stars in Reviews</h3>
                      </div>

                      <div className='app__Star'>
            <img src={star}/>
            <h3>Rated 5 Stars in Report Guru</h3>
                      </div>

                      <div className='app__Star'>
            <img src={star}/>
            <h3>Rated 5 Stars in BestTech</h3>
                      </div>
                    </div>



      </div>


          <div className='app__Cards'>
            <div className='app__Card'>
              <div className='app__profile'>
                <img src={colton}/>
                <div className='app__Name'>
                  <h4>Calton Smith</h4>
                  <p>Verified Buyer</p>
                </div>
              </div>

                        <p> "We needed the same printed design as the one we had ordered a week prior.
              Not only did they find the original order, but we also received it in time.
              Excellent!"</p>
            </div>

            <div className='app__Card'>
              <div className='app__profile'>
                <img src={colton}/>
                <div className='app__Name'>
                  <h4>Calton Smith</h4>
                  <p>Verified Buyer</p>
                </div>
              </div>

                        <p> "We needed the same printed design as the one we had ordered a week prior.
              Not only did they find the original order, but we also received it in time.
              Excellent!"</p>
            </div>

          </div>

    </div>
  );
}

export default App;
