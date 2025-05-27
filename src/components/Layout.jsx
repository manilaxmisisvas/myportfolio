import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div className=" select-none bg-gradient-to-t from-indigo-200 lg:h-[96vh] md:h-[96vh] h-[98vh] overflow-hidden  ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

//
