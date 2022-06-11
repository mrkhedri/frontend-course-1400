import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const domContainer = document.getElementById('main');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
