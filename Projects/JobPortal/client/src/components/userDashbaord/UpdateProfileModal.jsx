import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";

const UpdateProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-[var(--tertiary)]/60 ">
        <div className="bg-white min-w-4xl min-h-[80vh] border p-3 rounded-xl">
          <div className="flex justify-between border-b-2 p-2">
            <span>Update Profile</span>
          <button onClick={onClose} className="text-red-500 text-2xl"><RiCloseCircleFill/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileModal;
