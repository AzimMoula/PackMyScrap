import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bookings from './pages/Bookings';

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
