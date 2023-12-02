import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BookingsContextProvider } from './context/BookingsContext';
import { MenubarContextProvider } from './context/MenubarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenubarContextProvider>
      <BookingsContextProvider>
        <App />
      </BookingsContextProvider>
    </MenubarContextProvider>
  </React.StrictMode>
);
