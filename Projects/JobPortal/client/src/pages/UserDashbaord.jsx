import React from "react";
import SideBar from "../components/userDashbaord/sideBar";
import OverView from "../components/userDashbaord/OverView";
import Profile from "../components/userDashbaord/Profile";
import Application from "../components/userDashbaord/Application";

const UserDashbaord = () => {
  return (
    <>
      <div className="flex h-[91vh]">
        <div className="w-3/17 ">
          <SideBar />
        </div>
        <div className="w-14/17 ">
          <OverView />
          <Profile />
          <Application />
        </div>
      </div>
    </>
  );
};

export default UserDashbaord;
