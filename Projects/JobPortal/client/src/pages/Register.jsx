import React, { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!Validate()) {
      setLoading(false); // reset loading if validation fails
      toast.error("Please Solve the Errors");
      return;
    }

    setTimeout(() => {
      console.log(registerData);
      setRegisterData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setLoading(false);
      toast.success("Registration Sucessfull");
    }, 2000); // 2 seconds
  };

  return (
    <>
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="min-w-md border rounded shadow bg-white py-10 px-4 space-y-10">
          <h1 className="text-center text-xl">Register to JobPortal</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="fullName" className="w-1/4 inline-block">
                  Full Name:
                </label>
                <input
                  type="fullName"
                  name="fullName"
                  id="fullName"
                  value={registerData.fullName}
                  onChange={handleChange}
                  className=" w-3/4 border p-2 rounded focus:ring-2  focus:ring-blue-500 focus:outline-none"
                  placeholder="Jhon doe"
                />
              </div>
              {error.fullName && (
                <p className="text-center text-red-500 text-sm">
                  {error.fullName}
                </p>
              )}
            </div>
            <div>
              <div>
                <label htmlFor="email" className="w-1/4 inline-block">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={registerData.email}
                  onChange={handleChange}
                  className=" w-3/4 border p-2 rounded focus:ring-2  focus:ring-blue-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              {error.email && (
                <p className="text-center text-red-500 text-sm">
                  {error.email}
                </p>
              )}
            </div>
            <div>
              <div>
                <label htmlFor="password" className="w-1/4 inline-block">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={registerData.password}
                  onChange={handleChange}
                  className=" w-3/4 border p-2 rounded focus:ring-2  focus:ring-blue-500 focus:outline-none focus:border-none"
                  placeholder="*********"
                />
              </div>
              {error.password && (
                <p className="text-center text-red-500 text-sm">
                  {error.password}
                </p>
              )}
            </div>
            <div>
              <div>
                <label htmlFor="confirmPassword" className="w-1/4 inline-block">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleChange}
                  className=" w-3/4 border p-2 rounded focus:ring-2  focus:ring-blue-500 focus:outline-none focus:border-none"
                  placeholder="*********"
                />
              </div>
              {error.confirmPassword && (
                <p className="text-center text-red-500 text-sm">
                  {error.confirmPassword}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full border rounded-lg shadow p-2  hover:bg-blue-600 text-blue-500 hover:text-white"
            >
              {loading ? "Registering Data..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
