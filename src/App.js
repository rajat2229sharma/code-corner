import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Navlinks from './components/Header/Navlinks';
import ProtectRoutes from './routes/ProtectRoutes';
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
