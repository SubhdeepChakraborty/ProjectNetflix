import React, { useRef, useState } from "react";
import Logo from "../../components/navbar/Logo";
import Navbar from "../../components/navbar/Navbar";
import RegisterLogo from "./RegisterLogo";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const Emailref = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(Emailref.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef?.current?.value);
    setUsername(usernameRef?.current?.value);
    try {
      await axios.post("https://server-sf9z.onrender.com/api/auth/register", {
        email,
        username,
        password,
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center relative bg-black ">
      <div className="-top-20 absolute">
        <RegisterLogo />
      </div>
      <div
        className="text-white ml-2 mb-12 
      md:absolute md:top-[260px] textDiv padTextDiv flex flex-col items-center justify-center"
      >
        <h1 className="font-[Merriweather] font-semibold text-2xl mainText">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="font-[Sen] text-sm text-gray-400 smallText">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="font-[Sen] text-sm text-gray-400 smallText">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      {!email ? (
        <>
          <div className="absolute mt-[6rem] buttonDiv md:absolute md:top-[16rem]">
            <div className="flex ">
              <div>
                <input
                  placeholder="Email"
                  className="w-[350px] inputText p-1 px-2 rounded font-[Sen] text-lg
                  font-medium outline-none border-b-2 border-b-gray-600"
                  ref={Emailref}
                />
              </div>
              <div>
                <button
                  className="font-[Merriweather] text-white font-normal p-2 bg-red-700 
              px-4 ml-2 rounded text-sm h-[100%]
        border border-red-700 buttonMobile"
                  onClick={handleStart}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <form className="absolute flex flex-col-reverse items-center justify-center top-[22rem] w-[100%]">
            <div className="userpasDiv">
              <input
                placeholder="username"
                className="w-[180px] userpas user p-1 px-2 mr-1 rounded font-[Sen] 
                font-medium outline-none border-b-2 border-b-gray-600"
                ref={usernameRef}
              />
              <input
                placeholder="password"
                className="w-[180px] userpas p-1 px-2 rounded font-[Sen] font-medium outline-none border-b-2 border-b-gray-600"
                ref={passwordRef}
              />
              <button
                transition={{ ease: "easeInOut" }}
                className="font-[Merriweather]  text-white font-normal p-2 bg-red-700 px-4 ml-2 rounded text-sm
        border border-red-700"
                onClick={handleFinish}
              >
                Start Now
              </button>
            </div>
          </form>
        </>
      )}

      <div className="absolute right-6 top-6">
        <Link to="/login">
          <motion.button
            className="font-[Merriweather] text-white font-normal p-1 bg-red-700 px-3 rounded text-sm border border-red-700"
            whileTap={{ scale: 0.3 }}
            transition={{ ease: "easeInOut" }}
          >
            Sign in
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
