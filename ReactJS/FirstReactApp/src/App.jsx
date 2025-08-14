import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About />
      <Education />
      <Projects />
      <Certifications />
      <ContactMe />
    </>
  );
}

export default App;
