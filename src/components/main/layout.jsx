import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

function Layout() {
  return (
    <div className='bg-black'>
      <Sidebar />
       <Outlet />
      
    </div>
  );
}

export default Layout;
