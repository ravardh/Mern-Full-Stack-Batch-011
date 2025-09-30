import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="bg-gray-200 h-full p-2 flex flex-col justify-between">
        <div>
          <h1 className="text-lg border-b-2 text-center font-bold">
            {" "}
            User Dashbaord
          </h1>

          <div>
            <ul>
              <li>Overview</li>
              <li>Profile</li>
              <li>Application</li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 text-center p-2">
          <button className="border bg-red-500 py-2 px-4 rounded-lg font-bold text-white">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
