// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Footer } from './components/Footer'
import { Testimonial } from './components/Testimonial'
import { Navbar } from './components/Navbar';

import MenuTutorias from "./components/MenuTutorias";
import ProfesorDestacado from './components/ProfesorDestacado';
const App = () => {
  return (
    <>
      <Navbar></Navbar>
     
      <Testimonial/>
      <ProfesorDestacado/>
      <MenuTutorias></MenuTutorias>
      
      <Footer />
    </>
  );
};

export default App;