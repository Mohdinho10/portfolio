import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="font-bodyFont">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Home />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer isDarkMode={isDarkMode} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        closeOnClick
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
