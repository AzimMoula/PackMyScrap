import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BookingsContextProvider } from './context/BookingsContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BookingsContextProvider>
        <App />
      </BookingsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
