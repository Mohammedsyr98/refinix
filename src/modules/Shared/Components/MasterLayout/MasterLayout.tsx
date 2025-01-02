import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function () {
  return (
    <div className="flex flex-row">
      <div className="bg-red-500 min-w-[200px] min-h-[100vh]">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
