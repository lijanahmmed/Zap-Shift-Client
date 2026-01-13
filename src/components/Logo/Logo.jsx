import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div className="flex items-center md:items-end hover:scale-105 transition">
      <img src={logo} alt="" />
      <h3 className="text-2xl md:text-3xl font-bold -ms-2.5">zapShift</h3>
    </div>
  );
};

export default Logo;
