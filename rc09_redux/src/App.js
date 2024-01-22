
import './App.css';
//import Counter from "./components/Counter"
import Todo from "./components/Todo"

import { Store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={Store}>
    {/* <Counter /> */}
    < Todo />

    </Provider>
  );
}

export default App;
