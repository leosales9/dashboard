import React from "react";
import { Outlet } from "react-router-dom";
import Lateral from "./Lateral";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row lg:w-auto">
      <div className=" hidden lg:flex">
      <Lateral />
      </div>
      <div className="flex flex-col flex-1 w-screen">
        <Header />
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
