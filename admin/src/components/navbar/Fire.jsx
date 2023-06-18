import React from "react";
import Lottie from "lottie-react";
import Fires from "./92169-fire-animation.json";

const Fire = () => {
  return (
    <div className="w-[3rem]">
      <Lottie animationData={Fires} loop={true} />
    </div>
  );
};

export default Fire;
