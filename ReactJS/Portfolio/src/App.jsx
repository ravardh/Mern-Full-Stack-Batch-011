import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Education from "./pages/Education";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <main className="flex h-[91.5vh]">
          <Sidebar />
          <section className="border border-green-600 w-11/14">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
