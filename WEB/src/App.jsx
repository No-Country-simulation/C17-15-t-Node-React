import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Assuming Home is imported
import Contact from "./pages/Contact";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Courses } from "./pages/Courses";
import { Profile } from "./pages/Profile";
import { AnimatePresence } from "framer-motion";
import { CourseDetailContainer } from "./components/courseDetail/CourseDetailContainer";
import { UserProvider } from "./context/userProvider";
import { VerificationContextProvider } from "./context/verificationContext";

const App = () => {
  
  return (
    <VerificationContextProvider>
      <UserProvider>
        <Router>
          <NavBar /> {/* Render Navbar before Routes */}
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />{" "}
              {/* Descomenta y establece la ruta a "/" */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/course/:cid" element={<CourseDetailContainer />} />
            </Routes>
          </AnimatePresence>
          <Footer /> {/* Render Footer after Routes */}
        </Router>
      </UserProvider>
    </VerificationContextProvider>
  );
};

export default App;
