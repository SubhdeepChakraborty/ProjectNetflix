import React, { useState } from "react";
import Logo from "./Logo";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { useContext } from "react";
import { logout } from "../../authContext/AuthActions";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);
  console.log(isScrolled);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div>
      <div
        className={`w-full h-[90px] flex flex-row items-center justify-between z-[999] ${
          isScrolled === true ? "bg-black/[0.8]" : ""
        }`}
        style={{ position: "fixed" }}
      >
        <div className="xl:ml-14 lg:ml-14 md:ml-14 ml-4 logo">
          <img
            className="h-[30px] w-[100px] "
            src="/Netflix_Logo.png"
            alt="Netflix"
          />
        </div>
        <div>
          <div className="text-white afterLogo">
            <>
              <Link to="/">
                <span className="mr-10  cursor-pointer ">Home</span>
              </Link>
              <Link to="/series">
                <span className="mr-10 cursor-pointer">Series</span>
              </Link>
              <Link to="/movies">
                <span className=" cursor-pointer">Movies</span>
              </Link>
            </>
          </div>
        </div>

        <div className="xl:mr-14 lg:mr-14 md:mr-14 mr-3 text-white flex items-center">
          <LogoutIcon
            className="cursor-pointer"
            onClick={() => dispatch(logout())}
          />
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VEi8EnGIDT5--ZEYX_KLbkhNdeAwHUN1tQ&usqp=CAU"
            className="h-[50px] w-[50px] xl:block md:block lg:block sm:block hidden rounded-full object-cover"
          /> */}
          {/* <div className="text-white flex items-center justify-center cursor-pointer h-[60px] w-[60px] mt-4 ">
            {/* <ArrowDropDown
              onClick={() => setShow(!show)}
              sx={{ fontSize: 40 }}
            />
            <div
              className={`flex flex-col items-center 
             ${show === false ? "hidden" : "visible"}`}
            >
              <span className="mt-1 p-2 bg-black/[0.9] cursor-pointer">
                Setting
              </span>
              <span
                className="p-2 bg-black/[0.9]  cursor-pointer"
                onClick={() => dispatch(logout())}
              >
                Logout
              </span>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
