import React from 'react';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Work from './Work';

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <Work first/>
      <Work/>
      <Work/>
    </div>
  );
}

export default App;
