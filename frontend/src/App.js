import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bookings from './pages/Bookings';
import Menubar from './components/Menubar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="body">
          <Menubar />
          <div className="pages">
            <Routes>
              <Route 
                path='/bookings'
                element={<Bookings />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
