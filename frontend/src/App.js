import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bookings from './pages/Bookings';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path='/bookings'
              element={<Bookings />}
            />
            <Route 
              path='/signup'
              element={<Signup />}
            />
            <Route 
              path='/login'
              element={<Login />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
