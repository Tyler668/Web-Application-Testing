import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const addStrike = () => {
    if (strikes < 3) { setStrikes(strikes + 1); }
    else { 
      setStrikes(0);
      setBalls(0);
     }
  }

  const addBall = () => {
    if (balls < 4) { setBalls(balls + 1); }
    else { 
      setBalls(0);
      setStrikes(0);
     }
  }

  const handleFoul = () => {
    if (strikes < 3) { setStrikes(strikes + 1); }
  }

  const handleHit = () => {
    setStrikes(0);
    setBalls(0);
  }

  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} />
      <Dashboard addStrike={addStrike} addBall = {addBall} handleFoul = {handleFoul} handleHit = {handleHit} />
    </div>
  );
}

export default App;
