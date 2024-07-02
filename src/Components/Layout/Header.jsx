import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-[40px]">IG Dashboard</div>
      <div>
        <div className="text-2xl">
          <FaRegUserCircle className="text-[40px]" />
        </div>
      </div>
    </div>
  );
};
