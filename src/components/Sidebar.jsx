import React from "react";
//ROUTER
import { NavLink, Link } from "react-router-dom";
//ICONS
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
//ASSETS
import logo from "../assets/logo.png";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-grey-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) {
      closeToggle(false);
    }
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full owerflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            <RiHomeFill /> Home
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">
            Discover categories
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
