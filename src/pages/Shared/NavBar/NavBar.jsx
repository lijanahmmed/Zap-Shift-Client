import React from "react";
import Logo from "../../../components/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../Hook/useAuth";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, logOutUser } = useAuth();
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-primary px-4 font-semibold rounded-3xl" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "bg-primary px-4 font-semibold rounded-3xl" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/coverage"
          className={({ isActive }) =>
            isActive ? "bg-primary px-4 font-semibold rounded-3xl" : ""
          }
        >
          Coverage
        </NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.info("Log out!!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <Logo></Logo>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div>
          {user ? (
            <div className="flex gap-2 items-center">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1">
                  <img
                    className="w-10 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
                >
                  <li className="font-bold">{user.displayName}</li>
                  <li className="text-gray-500">{user.email}</li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn bg-primary mt-2"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <Link className="btn btn-primary text-black">Be a Rider</Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Link to="/login" className="btn bg-primary rounded-md">
                Login
              </Link>
              <Link to="/register" className="btn bg-primary rounded-md">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
