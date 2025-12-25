import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-lime-50 py-1">
        <NavBar></NavBar>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <div className="bg-lime-950 mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
