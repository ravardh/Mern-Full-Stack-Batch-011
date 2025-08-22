import React from "react";
import { useLocation } from "react-router-dom";
//import matrixBg from "../assets/matrix-bg.gif";

const Navbar = () => {
  const Aman = useLocation().pathname;
  console.log(Aman);
  return (
    <>
      <div
        className={`bg-[url('./matrix-bg.gif')] p-3 ${
          Aman === "/about" ? "-mt-15" : "mt-0"
        } transition-all duration-200`}
      >
        <h1 className="text-3xl font-bold text-center text-green-100">
          Raj Vardhan - Full Stack Developer
        </h1>
      </div>
    </>
  );
};

export default Navbar;
