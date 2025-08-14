import React from "react";
import raj from "../assets/mypic.jpg";
import resume from "../assets/Resume.pdf";

function Home() {
  return (
    <>
      <div className="container my-3 d-flex justify-content-between">
        <div className="d-flex align-items-center gap-4">
          <img src={raj} alt="" id="image" />
          <div>
            <h3 className="text-primary">Raj Vardhan</h3>
            <h6>Ex-Amazon | Full Stack Developer</h6>
          </div>
        </div>

        <div className="d-grid">
          <a href="mailto:rajvardhan@ricr.in">rajvardhan@ricr.in</a>
          <a href="tel:+917340862969">+91 7340862969</a>
          <a href="https://www.linkedin.com/in/ravardh/" target="_blank">
            LinkedIn
          </a>
          <a href="https://www.github.com/ravardh/" target="_blank">
            GitHub
          </a>
          <a href={resume} download>
            Download My Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
