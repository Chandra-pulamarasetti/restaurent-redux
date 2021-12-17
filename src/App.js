import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menubar from './components/Menubar';
import Navbar from './components/Navbar';
import Layout from './components/Layout';

import { Provider } from 'react-redux';
import store from './store'


function App() {
  return (
    <Provider store={store}>
          <div className="App">
            <Navbar />
            <Menubar />
            <Layout />
          </div>
    </Provider>
  );
}

export default App;
