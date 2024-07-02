import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { LogOut } from "../Auth/LogOut";
export const Header = () => {
  const username = "Usama Tahir";
  return (
    <div className="flex justify-between items-center">
      <div className="text-[40px]">IG Dashboard</div>
      <div className="flex items-center gap-5">
        <div className="text-2xl flex items-center gap-2">
          <FaRegUserCircle className="text-[40px]" />
          {username}
        </div>
        <div>
          <LogOut />
        </div>
      </div>
    </div>
  );
};
