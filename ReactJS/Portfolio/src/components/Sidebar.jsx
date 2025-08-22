import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  const aman = useNavigate();
  return (
    <>
      <div className="border border-red-600 w-3/14 flex flex-col justify-between">
        <div className="flex flex-col gap-3 p-5">
          <Link to={"/"} className="flex gap-3 items-center">
            <FaHome /> Home
          </Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/project"}>Project</Link>
          <Link to={"/education"}>Education</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <button
          className="border p-3  m-3 rounded-lg bg-amber-300 text-xl font-bold"
          onClick={() => aman("/login")}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Sidebar;
