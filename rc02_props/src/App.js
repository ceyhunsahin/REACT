import React from 'react';
import Person from './components/person/Person';
import kisi from './components/data/data';


import './App.css';

function App() {
  return (

    <div className="App">

    {kisi.map((e) => (
      
      <div>
        <Person name = {e.name} surname = {e.surname} tel = {e.tel} img = {e.img}/>
      </div>
    ))}

    </div>
  );
}

export default App;
