import './App.css'
// import { Footer } from './components/Footer'
// import { Testimonial } from './components/Testimonial'
import { Navbar } from './components/Navbar';
// import MenuTutorias from "./components/MenuTutorias";
// import ProfesorDestacado from './components/ProfesorDestacado';

// paginas
import Home from './pages/Home'
import Contact from './pages/Contact'
import { About } from "./pages/About"
import { Services } from "./pages/Services"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>

      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          {/* <Route path='/home' element={<Home></Home>}></Route> */}
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
        </Routes>
      </Router>

      {/* <Testimonial/>
      <ProfesorDestacado/>
      <MenuTutorias></MenuTutorias> */}
      
      {/* <Footer /> */}
    </>
  );
};

export default App;