
import './App.scss';
import Inline from './components/inline-style/inline';
import { StyleSheet } from './components/regular-style/StyleSheet';
import data from '../src/data';
import Card from './components/card/Card'
import { ModuleBtn } from './components/ModuleCss/ModuleBtn';


const handlerEventButton = (e) => {
  alert(e.target.name);
}
function App() {
  return (
    <div>

        <Inline />
        <StyleSheet secenek = {false}/>
        <Card veri = {data} />
        <ModuleBtn btnStyle = "birinci" btnName = "Kaydet" btnHandler = {handlerEventButton}/>
        <ModuleBtn btnStyle = "ikinci"  btnName = "Sil"/>
     
      

    </div>
  );
}

export default App;
