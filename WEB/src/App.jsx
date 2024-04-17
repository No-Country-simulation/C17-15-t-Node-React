import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home'; // Assuming Home is imported
import  Contact  from './pages/Contact';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Profile } from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Render Navbar before Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Descomenta y establece la ruta a "/" */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer /> {/* Render Footer after Routes */}
    </Router>
  );
};

export default App;
