import React from "react";
import SearchBar from "./SearchBar";
import Logo from "assets/logo.svg";
import UserProfile from "assets/user-profile.svg";
import ChevronDown from "assets/chevron-down.svg";
import { Calendar2, MessageQuestion, Notification } from "iconsax-react";

const AppBar = () => {
  return (
    <div className="appbar">
      <div className="company">
        <img src={Logo} alt="Mercor" className="w-6" />
        <span className="m-heading text-xl">Project M.</span>
      </div>
      <div className="container">
        <div className="flex items-center">
          <div className="mr-auto md:block hidden">
            <SearchBar />
          </div>
          <div className="flex mr-12 gap-7 ">
            {/* Options & Notifications */}
            <Calendar2 />
            <MessageQuestion />
            <div className="relative">
              <Notification />
              <span className="notification-dot"></span>
            </div>
          </div>
          <div className="flex gap-5">
            {/* Profile */}
            <div className="flex flex-col text-right hidden sm:flex">
              <span className="text-primary-heading">Anima Agrawal</span>
              <span>U.P, India</span>
            </div>
            <div className="flex gap-1.5 items-center">
              <img
                src={UserProfile}
                alt="profile"
                className="w-10 h-10 min-w-10 min-h-10"
              />
              <img src={ChevronDown} alt="open" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
