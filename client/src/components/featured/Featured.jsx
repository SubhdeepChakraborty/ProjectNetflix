import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(
          `https://server-sf9z.onrender.com/api/movies/random?type=${type}`,
          {
            headers: {
              token:
                "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWE0NTU2MWE1NmYwZTBlNGE0YmZjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjU1NjY5MywiZXhwIjoxNjk1MTk2NjkzfQ.MdOZ8UPa68XOse_LEBcnfoF_u3YEvMFz_xrh9GW_qAA",
            },
          }
        );
        console.log(res);
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, []);
  return (
    <div className="h-[90vh] relative mobileIphoneXR">
      {type && (
        <div className="absolute top-20 selectMS left-[65px] font-[Merriweather] text-white flex items-center ">
          <span className="mr-3 text-xl textMS ">
            {type === "movies" ? "Movies" : "Series"}
          </span>
          <select
            name="genre"
            className="cursor-pointer bg-black/[0.9] p-1 text-sm selectionS"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="Crime">Crime</option>
            <option value="Sci">Sci-fi</option>
            <option value="Drama">Drama</option>
            <option value="Anime">Anime</option>
          </select>
        </div>
      )}
      <img src={content.img} className="object-cover h-[100%] w-[100%]" />
      <div className="absolute bottom-6 left-11 w-[40%] text-white widthMobile widthTab">
        <div className="flex flex-col">
          <img
            src={content.imgTitle}
            className="h-[180px] w-[300px] rounded contentMobile"
          />
          {/* <span className="mt-3 mb-3 font-[Sen] w-[500px] text-lg">
            {content.desc}
          </span> */}
          <div className="flex items-start justify-start ">
            <button
              className="bg-[#181823] rounded mr-3 
            flex ml-11 items-center justify-start p-3 py-1 smalldevicePad"
            >
              <PlayArrow />{" "}
              <span className=" font-[Merriweather] text-sm mr-2">Play</span>
            </button>
            <button
              className="bg-transparent border rounded flex 
            items-center justify-center p-3 py-1 "
            >
              <InfoOutlined />{" "}
              <span className=" font-[Merriweather] text-sm mr-2">Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
