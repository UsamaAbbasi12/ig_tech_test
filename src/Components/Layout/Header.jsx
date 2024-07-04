import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { LogOut } from "../Auth/LogOut";
import { Link } from "react-router-dom";
export const Header = () => {
  const username = "Usama Tahir";
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);
  return (
    <div className="flex justify-between items-center">
      <div className="text-[40px] cursor-pointer">IG Dashboard</div>
      <div className="flex items-center gap-5">
        <div className="text-2xl flex items-center gap-2">
          <FaRegUserCircle className="text-[40px]" />
          {userData?.username}
        </div>
        <div>
          <LogOut />
        </div>
      </div>
    </div>
  );
};
