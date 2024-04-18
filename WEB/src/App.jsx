import "./App.css";
import { Footer } from "./components/Footer";
import { Testimonial } from "./components/Testimonial";
import { Navbar } from "./components/Navbar";
import MenuTutorias from "./components/MenuTutorias";
import ProfesorDestacado from "./components/ProfesorDestacado";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home'; // Assuming Home is imported
import  Contact  from './pages/Contact';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Courses } from './pages/Courses';
import { Profile } from './pages/Profile';

const App = () => {
  return (

    <Router>
      <NavBar /> {/* Render Navbar before Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Descomenta y establece la ruta a "/" */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer /> {/* Render Footer after Routes */}
    </Router>
  );
};

export default App;
