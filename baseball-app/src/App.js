import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

const increment = (value) => {
  return (value + 1);
}

const reset = () => {
  return (0);
}



function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const addStrike = () => {
    if (strikes < 3) { setStrikes(increment(strikes)); }
    else {
      setStrikes(0);
      setBalls(0);
    }
  }

  const addBall = () => {
    if (balls < 4) { setBalls(increment(balls)); }
    else {
      setBalls(reset);
      setStrikes(reset);
    }
  }

  const handleFoul = () => {
    if (strikes < 2) { setStrikes(increment(strikes)); }
  }

  const handleHit = () => {
    setStrikes(reset);
    setBalls(reset);
  }



  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} />
      <Dashboard addStrike={addStrike} addBall={addBall} handleFoul={handleFoul} handleHit={handleHit} />
    </div>
  );
}

export default App;
