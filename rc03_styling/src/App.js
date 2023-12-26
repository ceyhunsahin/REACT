
import './App.scss';
import Inline from './components/inline-style/inline';
import { StyleSheet } from './components/regular-style/StyleSheet';
import data from '../src/data';
import Card from './components/card/Card'


function App() {
  return (
    <div>

        <Inline />
        <StyleSheet secenek = {false}/>
  <Card veri = {data} />
     
      

    </div>
  );
}

export default App;
