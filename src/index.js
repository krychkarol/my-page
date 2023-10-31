import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/_index.scss';

import Navbar from './pages/navbar/navbar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import Footer from './pages/footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>
);