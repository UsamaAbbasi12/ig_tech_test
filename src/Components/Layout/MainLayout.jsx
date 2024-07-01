import React from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { Outlet } from "react-router";
export const MainLayout = () => {
  return (
    <div className="dashboard-layout">
      <div>
        <Header />
      </div>
      <div>
        <div>
          <SideBar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
