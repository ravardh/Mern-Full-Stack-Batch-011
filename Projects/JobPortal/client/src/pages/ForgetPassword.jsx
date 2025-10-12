import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const ForgetPassword = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md">
        <div className="bg-gray-200 w-lg p-3">
          {/* Modal Header */}
          <div className="flex justify-between border-b-2 pb-2">
            <h1 className="text-lg">Forget Password</h1>
            <button className="text-2xl">
              <IoIosCloseCircle />
            </button>
          </div>

          {/* Modal body */}
          <div>
            {/* Email, OTP, NewPassowrd , confrim new Password */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
