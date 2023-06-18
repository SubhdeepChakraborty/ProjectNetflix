import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ArrowUpward } from "@mui/icons-material";

const Featured = () => {
  return (
    <div className="flex  items-center justify-between p-2 text-black">
      <div className="ml-3 shadow-lg  p-4 mt-3 px-10 py-10 ">
        <p className="text-2xl">Revanue</p>
        <div className="text-xl">
          <span className="">$2314</span>
          <span className="ml-4 text-sm">
            -11.4 <ArrowDownwardIcon sx={{ color: "red", fontSize: 20 }} />{" "}
          </span>
        </div>
        <span className="text-gray-400 text-[15px]">
          Comapared to last month
        </span>
      </div>
      <div className="shadow-lg p-4 mt-3 px-10 py-10 ">
        <p className="text-2xl">Sales</p>
        <div className="text-xl">
          <span className="">$4314</span>
          <span className="ml-4 text-sm ">
            -1.4 <ArrowDownwardIcon sx={{ color: "red", fontSize: 20 }} />{" "}
          </span>
        </div>
        <span className="text-gray-400 text-[15px]">
          Comapared to last month
        </span>
      </div>
      <div className="mr-3 shadow-lg p-4 mt-3 px-10 py-10 ">
        <p className="text-2xl">Cost</p>
        <div className="text-xl">
          <span className="">$2314</span>
          <span className="ml-4 text-sm">
            +2.4 <ArrowUpward sx={{ color: "green", fontSize: 20 }} />
          </span>
        </div>
        <span className="text-gray-400 text-[15px]">
          Comapared to last month
        </span>
      </div>
    </div>
  );
};

export default Featured;
