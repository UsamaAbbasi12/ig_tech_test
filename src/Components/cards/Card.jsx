import React from "react";

export const Card = ({ title, icon, value, currencySign = "" }) => {
  return (
    <div className="border w-[400px] min-h-[100px] p-5 rounded-lg shadow border-red-600">
      <div>
        <div className="text-xl mb-6 font-bold border-b-2 border-red-400">
          {title}
        </div>
      </div>
      <div className="flex justify-between items-center  ">
        <div className="text-[50px]"> {icon}</div>
        <div className="text-4xl">
          {value}
          {currencySign}
        </div>
      </div>
    </div>
  );
};
