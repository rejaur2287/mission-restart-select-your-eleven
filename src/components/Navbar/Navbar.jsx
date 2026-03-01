import React from "react";
import logo from "../../assets/logo.png";
import coin from "../../assets/Currency.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-lg w-11/12 mx-auto">
        <div className="navbar-start w-full">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <a>
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-end flex place-content-end justify-end w-full mx-4">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end w-1/4">
          <a className="btn flex items-center gap-2 place-content-center">
            <span className="mx-2">10000000</span>
            Coin
            <img src={coin} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
