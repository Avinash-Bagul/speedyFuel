import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SignUpProvider } from './context/SignUpContext';
import { BuyFuelProvider } from './context/BuyFuelContex';
import { LoginDataProvider } from './context/LoginContex';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SignUpProvider>
        <LoginDataProvider>
          <BuyFuelProvider>
            <App />
          </BuyFuelProvider>
        </LoginDataProvider>
      </SignUpProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
