import {
  Add,
  AddBox,
  DragHandleOutlined,
  InfoOutlined,
  PlayArrow,
  PlayArrowOutlined,
  PlayCircleFilledRounded,
  PlayCircleFilledWhiteOutlined,
  PlayCircleOutlineRounded,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
  ThumbUpOffAltSharp,
  ThumbsUpDownOutlined,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Listitem = ({ index, item }) => {
  // const { open, setOpen } = useglobalHook();
  // console.log(open);

  const [movie, setMovie] = useState({});
  // console.log(item);
  useEffect(() => {
    const getMovie = async (req, res) => {
      try {
        const res = await axios.get(
          "https://server-sf9z.onrender.com/api/movies/find/" + item,
          {
            headers: {
              token:
                "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWE0NTU2MWE1NmYwZTBlNGE0YmZjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjU1NjY5MywiZXhwIjoxNjk1MTk2NjkzfQ.MdOZ8UPa68XOse_LEBcnfoF_u3YEvMFz_xrh9GW_qAA",
            },
          }
        );
        setMovie(res.data);
        // console.log(movie);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://vod-progressive.akamaized.net/exp=1683377180~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=8526f5bda3510e5d9d389bff66bb2da8ca25519a73d909c49e1a6ccf1915b62f/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4";
  return (
    <>
      <motion.div
        className="w-[225px] rounded h-[120px]  bg-black overflow-hidden border border-black 
      hover:w-[325px]
      hover:h-[320px]
      hover:shadow-[0px_9px_20px_10px_#00000024,0px_3px_8px_0px_#1a202c]
      hover:absolute
      hover:top-[-150px]
      hover:z-[999] relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-full bg-black flex items-center justify-center hover:h-[0px] h-[120px] object-cover pointer-events-none">
          <img src={movie.img} />
        </div>
        {isHovered && (
          <>
            <div
              className="w-[100%] absolute object-cover flex items-center justify-center hover:h-[220px] h-[200px] 
          top-0 left-0  pointer-events-none"
            >
              <video
                src={movie.trailer}
                autoPlay={true}
                loop
                className="absolute top-0 h-[200px] object-cover"
              />
            </div>
            <div className="flex flex-col mb-4 bg-black">
              <div
                className="flex absolute  p-10 text-white w-[100%]
               items-center justify-evenly  z-[1000000] top-[6rem]"
              >
                <Link to="/watch" state={{ movie: movie }}>
                  <motion.div
                    whileTap={{ scale: 0.4 }}
                    className=" cursor-pointer mr-[11rem]"
                  >
                    <PlayArrow />
                  </motion.div>
                </Link>
                {/* <motion.div
                  whileTap={{ scale: 0.4 }}
                  className=" cursor-pointer left-10"
                >
                  <Add />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.4 }}
                  className=" cursor-pointer left-20"
                >
                  <ThumbUpAltOutlined />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.4 }}
                  className=" cursor-pointer left-[120px]"
                >
                  <ThumbDownAltOutlined />
                </motion.div> */}
                <div className="text-gray-600 font-semibold  cursor-default right-1 pointer-events-none">
                  {movie.genre}
                </div>
              </div>
              <div className=" absolute top-[10rem] bg-black">
                <div className="flex items-center font-bold text-gray-500 mt-1">
                  <span className="text-sm pointer-events-none">
                    {movie.duration}
                  </span>
                  <span className="border border-gray-500 px-1 ml-2 mr-2 text-sm pointer-events-none">
                    {movie.limit}
                  </span>
                  <span className="pointer-events-none">{movie.year}</span>
                </div>
                <div className="text-white p-1 text-sm w-full cursor-default pointer-events-none ">
                  {movie.desc}
                </div>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </>
  );
};

export default Listitem;
