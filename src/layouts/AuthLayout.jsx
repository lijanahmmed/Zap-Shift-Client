import React from "react";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="mt-10 w-10/12 mx-auto">
      <Logo></Logo>
      <div className="md:flex items-center lg:w-10/12 mx-auto">
        <div className="flex-1 mt-15">
          <Outlet></Outlet>
        </div>
        <div className="flex-1 mt-15">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
