import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("userData")) || "");
  }, []);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {user ? (
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center w-full max-w-md">
            <img
              src={user.photo || ""}
              alt="User Photo"
              className="w-28 h-28 rounded-full mb-4 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-2">{user.fullName}</h2>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Phone:</span> {user.phone}
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center w-full max-w-md">
            <div className="text-xl text-red-500">Please Login First</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
