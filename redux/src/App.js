
import './App.css';
import CakeContainer from './components/cakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />

    </div>
    </Provider>
  );
}

export default App;
