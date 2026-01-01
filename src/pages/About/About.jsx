import React from "react";
import { NavLink, Outlet } from "react-router";

const About = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/about/story"
          className={({ isActive }) =>
            isActive
              ? "text-gray-950 font-extrabold border-b-4 pb-1"
              : "text-gray-600 font-bold"
          }
        >
          Story
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about/mission"
          className={({ isActive }) =>
            isActive
              ? "text-gray-950 font-extrabold border-b-4 pb-1"
              : "text-gray-600 font-bold"
          }
        >
          Mission
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about/success"
          className={({ isActive }) =>
            isActive
              ? "text-gray-950 font-extrabold border-b-4 pb-1"
              : "text-gray-600 font-bold"
          }
        >
          Success
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about/team"
          className={({ isActive }) =>
            isActive
              ? "text-gray-950 font-extrabold border-b-4 pb-1"
              : "text-gray-600 font-bold"
          }
        >
          Team
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-15">
      <h2 className="text-3xl font-bold ">About Us</h2>
      <p className="text-gray-500 max-w-2xl mt-2">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="mt-10">
        <ul className="flex gap-5">{links}</ul>
      </div>
      <div className="text-gray-500 mt-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default About;
