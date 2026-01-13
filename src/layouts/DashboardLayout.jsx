import React from "react";
import Logo from "../components/Logo/Logo";
import { Link, NavLink, Outlet } from "react-router";
import useAuth from "../Hook/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-primary px-4 font-semibold rounded-md" : "hover:bg-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "bg-primary px-4 font-semibold rounded-md" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/send-parcel"
          className={({ isActive }) =>
            isActive ? "bg-primary px-4 font-semibold rounded-md" : ""
          }
        >
          Send Parcel
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-parcel"
          className={({ isActive }) =>
            isActive ? "bg-primary px-4 font-semibold rounded-md" : ""
          }
        >
          My Parcel
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <nav className="navbar w-full bg-lime-50 py-2">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="w-full flex justify-between items-center">
            <div>
              <Link to="/" className="btn btn-ghost lg:-ml-5">
                <Logo></Logo>
              </Link>
            </div>
            <div className="flex items-center gap-4 mr-10 lg:mr-40">
              <div>
                <img className="w-10 rounded-full" src={user.photoURL} alt="" />
              </div>
              <div>
                <p className="font-semibold">{user.displayName}</p>
                <p className="text-sm text-gray-500">Role</p>
              </div>
            </div>
          </div>
        </nav>

        <div className="w-11/12 mx-auto mt-15">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="min-h-full flex flex-col items-start bg-lime-50 w-44 mt-16 pt-2 pb-5 lg:mt-0 lg:pt-16">
          <div className="border border-gray-200 w-full hidden lg:block"></div>
          <ul className="menu w-full grow space-y-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
