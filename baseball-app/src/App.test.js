import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { increment, reset, strikes, setStrikes, balls, setBalls } from './App';
import Dashboard from './components/Dashboard';
import Display from './components/Display';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders Dashboard', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Display', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Display />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test("adds one to input", () => {
  expect(increment(2)).toBe(3);
});

test("strikes good", () => {
  if(strikes === 2 && addStrike(1) ){
    expect(strikes).toBe(0);
  }
  
});

// test('resets to zero', () => {
//   expect(reset()).toBe(0);
// });

