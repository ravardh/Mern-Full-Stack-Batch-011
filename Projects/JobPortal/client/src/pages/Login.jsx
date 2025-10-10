import React, { useState } from "react";
import working from "../assets/working.jpg";
import api from "../config/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { setUser, setIsLogin, setIsRecruiter } = useAuth();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(loginData);

    try {
      const res = await api.post("/auth/login", loginData);
      toast.success(res.data.message);
      sessionStorage.setItem("userData", JSON.stringify(res.data.data));
      setIsLogin(true);
      setUser(res.data.data);
      setIsRecruiter(res.data.data.role === "recruiter");
      setLoginData({
        email: "",
        password: "",
      });
      res.data.data.role === "recruiter"
        ? navigate("/recruiterdashboard")
        : navigate("/applicantDashboard");
    } catch (error) {
      console.log(error);
      toast.error(
        `Error : ${error.response?.status} | ${error.response?.data?.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[91vh] bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center py-10 px-2">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center">
        {/* Image placeholder for future use */}
        <div className="w-1/2">
          <img
            src={working}
            alt="Login"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex-1 w-full">
          <h1 className="font-bold italic text-3xl mb-5 text-blue-700">
            Login to JobPortal
          </h1>
          <form
            className="flex flex-col gap-5 bg-blue-50 p-6 rounded-xl shadow-inner"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                className="block text-gray-700 font-semibold mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-semibold mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="*********"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow"
            >
              {loading ? "Logging in ..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
