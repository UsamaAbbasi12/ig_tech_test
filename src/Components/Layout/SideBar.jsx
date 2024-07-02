import React from "react";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

export const SideBar = () => {
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="my-4  p-2 font-bold flex items-center">
          <GoHomeFill className="mr-2" />
          <Link to="/dashboard">Home</Link>
        </div>
        <div className="my-4  p-2 font-bold flex items-center">
          <TbReportSearch className="mr-2" />
          <Link to="/dashboard/reports">Reports</Link>
        </div>
        <div className="my-4 p-2 font-bold flex items-center">
          <IoSettingsOutline className="mr-2" />
          <Link to="/dashboard/settings">Settings</Link>
        </div>
      </div>
    </div>
  );
};
