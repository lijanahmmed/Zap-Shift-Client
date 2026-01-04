import React from "react";
import Logo from "../components/Logo/Logo";
import { Link, Outlet } from "react-router";
import authImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="mt-10 w-10/12 mx-auto pb-10">
      <Link to="/" className="btn btn-ghost text-xl">
        <Logo></Logo>
      </Link>
      <div className="md:flex items-center">
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
