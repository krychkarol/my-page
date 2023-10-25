import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './pages/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/_index.scss';
import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
    <Projects />
  </React.StrictMode>
);