 
import './App.css';
import { AddEvents} from './components/addEvents/addEvents';
import MouseEvents from './components/mouseEvents/mouseEvents';

function App() {
  return (
    <div className="App">
      <h2> Events in React JS</h2>
      <AddEvents/>
      <MouseEvents />
    </div>
  );
}

export default App;
