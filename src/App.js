import './App.css';
import Login from './components/Login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Navlinks from './components/Navlinks';
import ProtectRoutes from './components/ProtectRoutes';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navlinks />
          <Routes>
            <Route path='/' element={<ProtectRoutes Component={Home} />} />
            <Route path='/about' element={<ProtectRoutes Component={About} />} />
            <Route path='/contact' element={<ProtectRoutes Component={Contact} />} />
            <Route path='/dashboard' element={<ProtectRoutes Component={Dashboard} />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
