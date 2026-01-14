import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Contact } from "./components/Contact/Contact";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import AllWorks from "./components/pages/AllWorks";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Portfolio />
              <Contact />
            </>
          }
        />

        {/* All Work Page */}
        <Route path="/portfolio" element={<AllWorks />} />

        {/* Case Study */}
        <Route path="/case-study/:projectId" element={<CaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
