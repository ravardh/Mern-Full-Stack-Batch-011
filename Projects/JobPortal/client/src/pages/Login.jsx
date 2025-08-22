import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // const Name = e.target.name;
    // const Value = e.target.value;
    const { name, value } = e.target;
    setLoginData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginData);
    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="min-w-md border rounded shadow bg-white py-10 px-4 space-y-10">
          <h1 className="text-center text-xl">Login to JobPortal</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="w-1/4 inline-block">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={loginData.email}
                onChange={handleChange}
                className=" w-3/4 border p-2 rounded focus:ring-2  focus:ring-blue-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="w-1/4 inline-block">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={loginData.password}
                onChange={handleChange}
                className=" w-3/4 border p-2 rounded focus:ring-2  focus:ring-blue-500 focus:outline-none focus:border-none"
                placeholder="*********"
              />
            </div>
            <button
              type="submit"
              className="w-full border rounded-lg shadow p-2  hover:bg-blue-600 text-blue-500 hover:text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
