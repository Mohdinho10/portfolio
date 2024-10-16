import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import "./App.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-bodyFont">
      <Navbar />
      <Home />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
