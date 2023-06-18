import React from "react";
import LineWeightIcon from "@mui/icons-material/LineWeight";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
// import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import BarChartIcon from "@mui/icons-material/BarChart";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import MessageIcon from "@mui/icons-material/Message";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ReportIcon from "@mui/icons-material/Report";
import { Link, useLocation } from "react-router-dom";
import { PlayCircleOutline } from "@mui/icons-material";
import { List } from "@mui/icons-material";

const Sidebar = () => {
  const path = useLocation();
  console.log(path.pathname);
  return (
    <>
      <div className="sticky top-12 bg-black p-5 h-[100vh]">
        <div className="mt-[1rem] fixed w-[300px]">
          <div>
            <h2 className="font-semibold font-[Merriweather]  text-white/[0.7]">
              Dashboard
            </h2>
          </div>
          <div>
            <ul>
              <Link to="/">
                <li
                  className="list-none mb-3 mt-3 cursor-pointer hover:bg-white/[0.6] text-white  rounded p-1 active"
                  style={{
                    background: path.pathname === "/" ? "#E5E0FF" : " ",
                    color: path.pathname === "/" ? "black" : " ",
                  }}
                >
                  <LineWeightIcon /> Home
                </li>
              </Link>
              {/* <li className="list-none mb-3 cursor-pointer hover:bg-white/[0.6] p-1 text-white">
              <TimelineIcon /> Analytics
            </li>
            <li className="list-none mb-3 cursor-pointer hover:bg-white/[0.6] p-1 text-white">
              <TrendingUpIcon /> Sales
            </li> */}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold font-[Merriweather]  text-white/[0.7]">
              Quick Menu
            </h2>
          </div>
          <div>
            <ul className="text-white">
              <Link to="/users">
                <li
                  className="list-none mb-3 mt-3 cursor-pointer hover:bg-white/[0.6] p-1"
                  style={{
                    background: path.pathname === "/users" ? "#E5E0FF" : " ",
                    color: path.pathname === "/users" ? "black" : " ",
                  }}
                >
                  <PersonIcon /> Users
                </li>
              </Link>
              <Link to="/movies">
                <li
                  className="list-none mb-3 cursor-pointer hover:bg-white/[0.6] p-1"
                  style={{
                    background: path.pathname === "/movies" ? "#E5E0FF" : " ",
                    color: path.pathname === "/movies" ? "black" : " ",
                  }}
                >
                  <PlayCircleOutline /> Movies
                </li>
              </Link>
              <Link to="/lists">
                <li
                  className="list-none mb-3 cursor-pointer hover:bg-white/[0.6] p-1"
                  style={{
                    background: path.pathname === "/lists" ? "#E5E0FF" : " ",
                    color: path.pathname === "/lists" ? "black" : " ",
                  }}
                >
                  <List /> Lists
                </li>
              </Link>
              <li className="list-none mb-3 cursor-pointer hover:bg-white/[0.6] p-1">
                <BarChartIcon /> Reports
              </li>
            </ul>
          </div>
          {/* <div>
          <h2 className="font-semibold font-[Merriweather]  text-white/[0.7]">
            Notifications
          </h2>
        </div>
        <div>
          <ul className="text-white">
            <li className="list-none mb-3 mt-3 cursor-pointer hover:bg-white/[0.6] p-1">
              <AttachEmailIcon /> Mail
            </li>
            <li className="list-none mb-3 cursor-pointer hover:bg-white/[0.6] p-1">
              <DynamicFeedIcon /> Feedback
            </li>
            <li className="list-none mb-3 cursor-pointer hover:bg-white/[0.6] p-1">
              <MessageIcon /> Messages
            </li>
          </ul>
        </div> */}
          {/* <div>
          <h2 className="font-semibold font-[Merriweather]  text-[#B7B7B7]">
            Staff
          </h2>
        </div>
        <div>
          <ul className="text-white">
            <li className="list-none mb-3 mt-3 cursor-pointer hover:bg-white/[0.6] p-1">
              <ManageAccountsIcon /> Manage
            </li>
            <li className="list-none mb-3 cursor-pointer hover:bg-white/[0.6] p-1">
              <TimelineIcon /> Analytics
            </li>
            <li className="list-none mb-3 cursor-pointer hover:bg-white/[0.6] p-1">
              <ReportIcon /> Reports
            </li>
          </ul>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
