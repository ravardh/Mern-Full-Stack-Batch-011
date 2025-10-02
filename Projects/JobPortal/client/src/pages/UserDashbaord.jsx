import React, { useState } from "react";
import SideBar from "../components/userDashbaord/sideBar";
import OverView from "../components/userDashbaord/OverView";
import Profile from "../components/userDashbaord/Profile";
import Application from "../components/userDashbaord/Application";

const UserDashbaord = () => {
  const [active, setActive] = useState("overview");
  return (
    <>
      <div className="flex h-[91vh]">
        <div className="w-3/17 ">
          <SideBar active={active} setActive={setActive} />
        </div>
        <div className="w-14/17 ">
          {active === "overview" && <OverView />}
          {active === "profile" && <Profile />}
          {active === "application" && <Application />}
        </div>
      </div>
    </>
  );
};

export default UserDashbaord;
