import React from 'react';

import './App.css';
import { Hills } from './components/hills';
import { House } from './components/house';
import { Moon } from './components/moon';
import { Sun } from './components/sun';

function App() {
  return (
    <div className="App">
      <div className="landscape">
        <House />
        <Sun />
        <Moon /> 
        <Hills />
      </div>
    </div>
  );
}

export default App;
