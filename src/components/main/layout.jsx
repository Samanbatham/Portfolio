import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

function Layout() {
  return (
    <div className='bg-black lg:w-full xs:w-[450px] h-full lg:flex xs:block'>
      <Sidebar />
       <Outlet />
      
    </div>
  );
}

export default Layout;
