
import './App.css';
import Counter from "./components/Counter"

import { Store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={Store}>
     <Counter />

    </Provider>
  );
}

export default App;
