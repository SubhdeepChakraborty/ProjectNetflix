import React, { useEffect, useState, useRef } from "react";
import lottie from "lottie-web";
import animationData from "/public/29313-netflix-logo-swoop";
import Lottie from "lottie-react";

const RegisterLogo = () => {
  const animationRef = useRef(null);

  const handlePause = () => {};

  setTimeout(() => {
    animationRef.current.pause();
  }, 4000);

  return (
    <div>
      <Lottie animationData={animationData} lottieRef={animationRef} />
    </div>
  );
};

export default RegisterLogo;
