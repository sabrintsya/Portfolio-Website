import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Portfolio } from "./components/Portfolio/Portfolio";
import CaseStudy from "./components/CaseStudy/CaseStudy"; // <- HAPUS { } dan ganti jadi default import

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Portfolio />
              <Contact />
            </>
          } />
          <Route path="/case-study/:projectId" element={<CaseStudy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;