import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import starting from "../assets/starting.jpg";
import api from "../config/api";

const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const Validate = () => {
    let isvalid = true;
    const err = {};
    if (registerData.fullName.length < 3) {
      err.fullName = "Name should be of Atlest 3 Characters";
      isvalid = false;
    }
    if (!/^[A-Za-z ]+$/.test(registerData.fullName)) {
      err.fullName = "Only Alphabets are allowed";
      isvalid = false;
    }
    if (
      !/^[6-9]\d{9}$/.test(registerData.phone) ||
      registerData.phone.length !== 10
    ) {
      err.phone = "Please enter a valid Phone Number";
      isvalid = false;
    }
    if (
      !/^[A-Za-z\d._]+@gmail.com$/.test(registerData.email) ||
      registerData.email.length < 10
    ) {
      err.email = "Please enter a Valid Email";
      isvalid = false;
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(
        registerData.password
      )
    ) {
      err.password = "Please choose a Strong Password";
      isvalid = false;
    }
    if (registerData.password !== registerData.confirmPassword) {
      err.confirmPassword = "Password Not Match";
      isvalid = false;
    }
    setError(err);
    return isvalid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!Validate()) {
      setLoading(false);
      toast.error("Please Solve the Errors");
      return;
    }
    // setTimeout(() => {
    //   console.log(registerData);
    //   setRegisterData({
    //     fullName: "",
    //     email: "",
    //     phone: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    //   setLoading(false);
    //   toast.success("Registration Sucessfull");
    // }, 2000);

    try {
      const res = await api.post("/auth/register", registerData);
      toast.success(res.data.message);
      setRegisterData({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login");
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
    <section className="min-h-[91vh] bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center py-10 px-2">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center">
        {/* Image placeholder for future use */}
        <div className="w-1/3">
          <img
            src={starting}
            alt="Register"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex-1 w-full">
          <h1 className="font-bold italic text-3xl mb-5 text-blue-700">
            Register to JobPortal
          </h1>
          <form
            className="flex flex-col gap-5 bg-blue-50 p-6 rounded-xl shadow-inner"
            onSubmit={handleSubmit}
          >
            <div className="flex">
              <label
                className="block text-gray-700 font-semibold mb-1"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={registerData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {error.fullName && (
                <p className="text-red-500 text-sm mt-1">{error.fullName}</p>
              )}
            </div>
            <div className="flex">
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
                value={registerData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {error.email && (
                <p className="text-red-500 text-sm mt-1">{error.email}</p>
              )}
            </div>
            <div className="flex">
              <label
                className="block text-gray-700 font-semibold mb-1"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={registerData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {error.phone && (
                <p className="text-red-500 text-sm mt-1">{error.phone}</p>
              )}
            </div>
            <div className="flex">
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
                value={registerData.password}
                onChange={handleChange}
                placeholder="*********"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {error.password && (
                <p className="text-red-500 text-sm mt-1">{error.password}</p>
              )}
            </div>
            <div className="flex">
              <label
                className="block text-gray-700 font-semibold mb-1"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleChange}
                placeholder="*********"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {error.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {error.confirmPassword}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
