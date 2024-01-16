import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SearchContextProvider } from './context/SearchContext';
import { SeatsContextProvider } from './context/SeatsContext';
import { SelectedFlightProvider } from './context/SelectedFlightContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchContextProvider>
      <SeatsContextProvider>
        <SelectedFlightProvider>
            <App />
        </SelectedFlightProvider>
      </SeatsContextProvider>
    </SearchContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
