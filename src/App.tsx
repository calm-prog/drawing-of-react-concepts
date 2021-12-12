import { useState } from 'react';

import './App.css';
import { Clock } from './components/clock';
import { Hills } from './components/hills';
import { House } from './components/house';
import { Moon } from './components/moon';
import { Sun } from './components/sun';

function App() {
  const [ time, setTime ] = useState(12)

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
      <Clock 
        setTime={setTime}
      />
    </>
  );
}

export default App;
