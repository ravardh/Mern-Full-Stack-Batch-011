import React from "react";
import { FcHome, FcManager, FcDocument } from "react-icons/fc";

const navItems = [
  { value: "overview", text: "Overview", icons: <FcHome /> },
  { value: "profile", text: "Profile", icons: <FcManager /> },
  { value: "application", text: "Application", icons: <FcDocument /> },
];

const SideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="bg-gradient-to-b from-[var(--primary)]  to-[var(--secondary)] h-full p-2 flex flex-col justify-between">
        <div>
          <h1 className="text-lg border-b-2 border-[var(--background)] text-center text-[var(--text)] font-bold">
            {" "}
            User Dashbaord
          </h1>

          <div>
            <ul className="p-5 space-y-2">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex gap-2 items-center p-2 border border-[var(--background)] rounded-lg ${
                    active === item.value
                      ? "bg-[var(--tertiary)] "
                      : "hover:bg-[var(--background)] text-[var(--text)]"
                  }`}
                  onClick={() => setActive(item.value)}
                >
                  {item.icons} {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-[var(--background)] text-center p-2">
          <button className="border bg-red-500 py-2 px-4 rounded-lg font-bold text-white">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
