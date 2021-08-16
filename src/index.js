import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './components/Navbar.css';
import './components/Hero.css';
import './components/Footer.css';
import './components/Services.css';
import './components/Contact.css';
import './components/About.css';
import './components/Vehicles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
