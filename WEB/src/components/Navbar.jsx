import "../styles/Navbar.css";
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet } from 'react-router-dom';

import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"

export const Navbar = () => {
  return (
    // modifique casi todo para que sirviera de demostracion
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar-ul">
            <li className="navbar-li">
              <NavLink className="navbar-a" exact to="/">Home</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink className="navbar-a" to="/about">About</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink className="navbar-a" to="/services">Services</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink className="navbar-a" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};
