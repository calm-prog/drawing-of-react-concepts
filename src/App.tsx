import React from 'react';

import './App.css';
import { Clock } from './components/clock';
import { Hills } from './components/hills';
import { House } from './components/house';
import { Moon } from './components/moon';
import { Sun } from './components/sun';

function App() {
  return (
    <>
      <div className="App">
        <div className="landscape">
          <House />
          <Sun />
          <Moon /> 
          <Hills />
        </div>
      </div>
      <Clock />
    </>
  );
}

export default App;
