import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="border border-red-600 w-3/14">
        <div className="flex flex-col gap-3 p-5">
          <Link to={"/"} className="flex gap-3 items-center">
            <FaHome /> Home
          </Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/project"}>Project</Link>
          <Link to={"/education"}>Education</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
