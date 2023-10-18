import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './pages/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/_index.scss';
import Home from './pages/home/home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
  </React.StrictMode>
);