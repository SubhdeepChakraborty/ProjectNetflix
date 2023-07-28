import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
  KeyboardDoubleArrowRightSharp,
} from "@mui/icons-material";
import React from "react";
import Listitem from "./Listitem";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const List = ({ list }) => {
  //click limit
  const [clickLimit, setClicklimit] = useState(window.innerWidth / 260);
  const [slideNumber, setSlideNumber] = useState(0);
  const ref = useRef();

  const handleClick = (direction) => {
    let distance = ref.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      ref.current.style.transform = `translateX(${260 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      ref.current.style.transform = `translateX(${-260 + distance}px)`;
    }
  };

  return (
    <div className="w-[100%] mt-3">
      <span className="font-[Sen] text-xl text-white font-medium ml-10 z-[10]">
        {list.title} <KeyboardDoubleArrowRightSharp />
      </span>
      <div className="flex flex-col max-w-max relative">
        <div
          className="absolute  rounded w-[60px] flex items-center left-2 top-12 z-[999]
         "
        >
          <motion.div
            whileTap={{ scale: 0.5 }}
            className=" rounded-full bg-black/[0.7]"
          >
            <ArrowBackIosNewRounded
              sx={{ fontSize: 50 }}
              className="text-white/[0.7]"
              onClick={() => handleClick("left")}
            />
          </motion.div>
        </div>
        <div
          ref={ref}
          className="flex ml-14  transition-all duration-[1s] ease-in-out"
        >
          {list.content.map((item, i) => {
            return (
              <div className="p-3">
                <Listitem index={i} item={item} />
              </div>
            );
          })}
          {/* <div className="p-3">
            <Listitem index={1} />
          </div>
          <div className="p-3">
            <Listitem index={2} />
          </div>
          <div className="p-3">
            <Listitem index={3} />
          </div>
          <div className="p-3">
            <Listitem index={4} />
          </div>
          <div className="p-3">
            <Listitem index={5} />
          </div>
          <div className="p-3">
            <Listitem index={6} />
          </div>
          <div className="p-3">
            <Listitem index={7} />
          </div>
          <div className="p-3">
            <Listitem index={8} />
          </div>
          <div className="p-3">
            <Listitem index={9} />
          </div> */}
        </div>
        <div className="absolute top-12 rounded w-[60px] flex items-center right-0 z-[999]">
          <motion.div
            whileTap={{ scale: 0.5 }}
            className=" rounded-full bg-black/[0.7]"
          >
            <ArrowForwardIosRounded
              sx={{ fontSize: 50 }}
              className="text-white/[0.7]"
              onClick={() => handleClick("right")}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default List;
