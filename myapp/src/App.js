import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import { Routes ,Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/" element={<Home/>} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}
