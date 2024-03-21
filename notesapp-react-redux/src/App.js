import './App.css';
import store from './store/store';
import Noteapp from './Noteapp';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
<Noteapp/>
    </Provider>
  );
}

export default App;
