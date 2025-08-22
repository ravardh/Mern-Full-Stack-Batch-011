import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-500 p-3 flex justify-between text-white">
        <h1 className="text-2xl font-bold">Job Portal</h1>
        <div className="space-x-5">
          <Link
            to={"/about"}
            className="hover:text-amber-300 hover:border-b-2"
          >
            About
          </Link>
          <Link to={"/job"} className="hover:text-amber-300  hover:border-b-2">
            Jobs
          </Link>
          <Link to={"/contact"} className="hover:text-amber-300  hover:border-b-2">
            Contact
          </Link>
          <Link to={"/login"} className="hover:text-amber-300  hover:border-b-2">
            Login
          </Link>
          <Link to={"/register"} className="hover:text-amber-300  hover:border-b-2">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
