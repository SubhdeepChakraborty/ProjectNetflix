import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Watch = () => {
  let { state } = useLocation();
  console.log(state);
  const movie = state.movie;
  return (
    <div className="w-[100vw] h-[100vh]">
      <Link to="/">
        <div className="flex absolute top-2 left-2 text-white cursor-pointer z-10">
          <ArrowBackIosNewOutlined />
          <span className="font-[Merriweather]">Home</span>
        </div>
      </Link>
      <video
        className="w-[100%] h-[100%] object-cover"
        autoPlay
        progress
        controls
        src={movie.video}
      />
    </div>
  );
};

export default Watch;
