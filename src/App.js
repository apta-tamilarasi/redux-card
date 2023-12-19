
import { Provider } from 'react-redux';
import './App.css';
import Routing from './Component/Routing/Routing.js';
import {Store} from './Component/Redux/Store.js'

function App() {
  return (
    <div>
      <Provider store={Store}>
          <Routing/>
      </Provider>
    </div>
  );
}

export default App;
