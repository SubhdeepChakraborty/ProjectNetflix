import React from "react";
import Fire from "./Fire";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div
      className={`flex items-center justify-between sticky top-0 h-[4rem] z-[999] bg-black
     `}
    >
      <div className="mb-2 flex items-center justify-center">
        {/* <Fire /> */}
        <span className="text-5xl font-[Merriweather] ml-[2rem] font-semibold mt-2 cursor-pointer text-white/[0.7]">
          ADMIN
        </span>
      </div>
      <img
        src="https://images.alphacoders.com/102/1028021.jpg"
        alt="Batman"
        className="h-[40px] w-[40px] rounded-full object-cover absolute right-3 top-3 "
      />
      <div className="relative flex -mt-6">
        <div className="mr-5 mt-6">
          <NotificationsIcon
            sx={{ fontSize: 25 }}
            className="cursor-pointer text-white/[0.7]"
          />
          <span
            className="bg-red-600 w-[15px] rounded-full h-[15px] absolute top-3 left-[16px] text-white 
          text-sm flex items-center justify-center"
          >
            1
          </span>
        </div>
        <div className="mr-5 mt-6">
          <LanguageIcon
            sx={{ fontSize: 25 }}
            className="cursor-pointer text-white/[0.7]"
          />
          <span
            className="bg-red-600 w-[15px] rounded-full h-[15px] absolute top-3 right-[6.8rem] text-white 
          text-sm flex items-center justify-center"
          >
            1
          </span>
        </div>
        <div className="mr-[4.5rem] mt-6">
          <SettingsIcon
            sx={{ fontSize: 25 }}
            className="cursor-pointer text-white/[0.7]"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
