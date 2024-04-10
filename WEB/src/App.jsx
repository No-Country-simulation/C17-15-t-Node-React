// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Footer } from './components/Footer'
import { Testimonial } from './components/Testimonial'

import MenuTutorias from "./components/MenuTutorias";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>
      <Testimonial />
      <Footer />
      <MenuTutorias></MenuTutorias>
    </>
  );
};

export default App;