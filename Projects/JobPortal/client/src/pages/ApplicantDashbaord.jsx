import React, { useState } from "react";
import Sidebar from "../components/applicantDashboard/Sidebar";
import Overview from "../components/applicantDashboard/Overview";
import Profile from "../components/applicantDashboard/Profile";
import Application from "../components/applicantDashboard/Application";

const ApplicantDashbaord = () => {
  const [active, setActive] = useState("overview");
  return (
    <>
      <div className="flex h-[91vh]">
        <div className="w-3/17 ">
          <Sidebar active={active} setActive={setActive} />
        </div>
        <div className="w-14/17 ">
          {active === "overview" && <Overview />}
          {active === "profile" && <Profile />}
          {active === "application" && <Application />}
        </div>
      </div>
    </>
  );
};

export default ApplicantDashbaord;
