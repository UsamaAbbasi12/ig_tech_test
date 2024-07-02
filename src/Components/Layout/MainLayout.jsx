import React from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { Outlet } from "react-router";
export const MainLayout = () => {
  return (
    <div className="dashboard-layout">
      <div className="w-100 border p-5">
        <Header />
      </div>
      <div className="flex">
        <div className="w-56 min-h-screen border ">
          <SideBar />
        </div>
        <div className="flex-1 border p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
