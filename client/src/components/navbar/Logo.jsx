import React, { useEffect, useState, useRef } from "react";
import lottie from "lottie-web";
import animationData from "/public/29313-netflix-logo-swoop";
import Lottie from "lottie-react";

const Logo = () => {
  const animationRef = useRef(null);

  const handlePause = () => {};

  setTimeout(() => {
    animationRef.current.pause();
  }, 4000);

  return (
    <div className="h-[100px] w-[100px] z-[1000000]">
      <Lottie animationData={animationData} lottieRef={animationRef} />
    </div>
  );
};

export default Logo;
