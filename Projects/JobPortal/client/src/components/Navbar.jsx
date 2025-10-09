import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, isLogin, isrecruiter } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const [user, setUser] = useState(
  //   JSON.parse(sessionStorage.getItem("userData")) || null
  // );

  const handleMenu = () => {
    // if (isMenuOpen === false) {
    //   setIsMenuOpen(true);
    // } else {
    //   setIsMenuOpen(false);
    // }
    // isMenuOpen === false ? setIsMenuOpen(true) : setIsMenuOpen(false);

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-blue-500 p-3 flex justify-between text-white sticky top-0 z-100">
        <h1 className="text-2xl font-bold">Job Portal</h1>
        <div className="space-x-5 hidden md:flex items-center">
          <Link to={"/about"} className="hover:text-amber-300 hover:border-b-2">
            About
          </Link>
          <Link to={"/job"} className="hover:text-amber-300  hover:border-b-2">
            Jobs
          </Link>
          <Link
            to={"/contact"}
            className="hover:text-amber-300  hover:border-b-2"
          >
            Contact
          </Link>
          {user && isLogin ? (
            <>
              <div
                className="flex gap-3 items-center cursor-pointer group"
                onClick={() =>
                  user.role === "recruiter"
                    ? navigate("/recruiterDashboard")
                    : navigate("/userDashboard")
                }
              >
                <h1 className="group-hover:text-amber-300  group-hover:border-b-2">
                  {user.fullName}
                </h1>
                <img
                  src={user.photo}
                  alt=""
                  className="h-10 w-10 border object-cover rounded-full"
                />
              </div>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="hover:text-amber-300  hover:border-b-2"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="hover:text-amber-300  hover:border-b-2"
              >
                Register
              </Link>
            </>
          )}
        </div>
        <button
          className="p-2 block md:hidden text-2xl hover:scale-110"
          onClick={handleMenu}
        >
          <TiThMenu />
        </button>
      </div>
      {isMenuOpen && (
        <div className="h-85 w-full bg-blue-500 flex flex-col p-3 gap-3 absolute top-18 z-10">
          <Link
            to={"/about"}
            className="p-3 border rounded bg-blue-400 font-bold text-lg text-white text-center"
          >
            About
          </Link>
          <Link
            to={"/job"}
            className="p-3 border rounded bg-blue-400 font-bold text-lg text-white text-center"
          >
            Jobs
          </Link>
          <Link
            to={"/contact"}
            className="p-3 border rounded bg-blue-400 font-bold text-lg text-white text-center"
          >
            Contact
          </Link>
          <Link
            to={"/login"}
            className="p-3 border rounded bg-blue-400 font-bold text-lg text-white text-center"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="p-3 border rounded bg-blue-400 font-bold text-lg text-white text-center"
          >
            Register
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
