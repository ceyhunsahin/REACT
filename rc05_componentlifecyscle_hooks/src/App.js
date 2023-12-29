/* import ClassComponents from './components/ClassComponents'; */
import UseStateComp from './components/UseStateComp';
import UseEffectComp from './components/useEffectComp';
import './App.css';
import React, { useState } from'react';
import User from './components/User';

function App() {
  const [isVisible, setIsVisible] =useState(true);


  return (
    <div className="App">
      <h2> LifeCycles</h2>
   {/*    {isVisible && <UseStateComp />}  */}
   {/*  {isVisible && <UseEffectComp />} 
      <button onClick={() => setIsVisible(!isVisible)}> Toggle </button>  */}
      <User />
    </div>
  );
}

export default App;
