import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Logbook from "./pages/Logbook";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/logbook" element={<Logbook />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} Joaquin Luis Guevarra
      </footer>
      <ScrollToTop />
    </div>
  );
}