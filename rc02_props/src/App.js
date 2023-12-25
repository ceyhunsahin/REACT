import React from 'react';
import Person from './components/person/Person';
import kisi from './components/data/data';
import Message from './components/msg/msg';

import './App.css';

function App() {
  return (

    <div className="App">

    {kisi.map((e) => (
      
      <div>
        <Message name = {e.name} surname = {e.surname}/>
        <Person name = {e.name} surname = {e.surname} tel = {e.tel} img = {e.img}/>
      </div>
    ))}

    </div>
  );
}

export default App;
