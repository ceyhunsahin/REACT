import ClassComponents from './components/ClassComponents';
import './App.css';
import React, { useState } from'react';

function App() {
  const [isVisible, setIsVisible] =useState(true);
  

  return (
    <div className="App">
      <h2> LifeCycles</h2>
      {isVisible && <ClassComponents />}
      <button onClick={() => setIsVisible(!isVisible)}> Toggle </button>
    </div>
  );
}

export default App;
