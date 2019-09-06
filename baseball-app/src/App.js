import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';


export const increment = (value) => {
  return (value + 1);
}

export const reset = () => {
  return (0);
}


function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [outs, setOuts] = useState(0);
  const [score, setScore]  = useState(0);

  const addStrike = () => {
    if (strikes < 3) { setStrikes(increment(strikes)); }
    else {
      setStrikes(0);
      setBalls(0);
      setOuts(outs+1)
    }
  }

  const addBall = () => {
    if (balls < 4) { setBalls(increment(balls)); }
    else {
      setBalls(reset);
      setStrikes(reset);
      setScore(score+1)
    }
  }

  const handleFoul = () => {
    if (strikes < 2) { setStrikes(increment(strikes)); }
  }

  const handleHit = () => {
    setStrikes(reset);
    setBalls(reset);
    setScore(score+1)
  }


  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} outs = {outs} score = {score} />
      <Dashboard addStrike={addStrike} addBall={addBall} handleFoul={handleFoul} handleHit={handleHit} />
    </div>
  );
}

export default App;
