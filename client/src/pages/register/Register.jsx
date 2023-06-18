import React, { useRef, useState } from "react";
import Logo from "../../components/navbar/Logo";
import Navbar from "../../components/navbar/Navbar";
import RegisterLogo from "./RegisterLogo";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("/api/api/auth/register", { email, username, password });
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
      <div className="text-white ml-2 mb-12 flex flex-col items-center justify-center ">
        <h1 className="font-[Merriweather] font-semibold text-2xl">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="font-[Sen] text-sm text-gray-400">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="font-[Sen] text-sm text-gray-400">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      {!email ? (
        <>
          <div className="absolute right-[27.8rem] top-[22rem]">
            <input
              placeholder="Email"
              className="w-[350px] p-2 px-2 rounded font-[Sen] font-medium outline-none border-b-2 border-b-gray-600"
              ref={Emailref}
            />
            <button
              className="font-[Merriweather] text-white font-normal p-2 bg-red-700 px-4 ml-2 rounded text-sm
        border border-red-700"
              onClick={handleStart}
            >
              Get Started
            </button>
          </div>
        </>
      ) : (
        <>
          <form className="absolute right-[27.8rem] top-[22rem]">
            <input
              placeholder="username"
              className="w-[180px] p-2 px-2 mr-1 rounded font-[Sen] font-medium outline-none border-b-2 border-b-gray-600"
              ref={usernameRef}
            />
            <input
              placeholder="password"
              className="w-[180px] p-2 px-2 rounded font-[Sen] font-medium outline-none border-b-2 border-b-gray-600"
              ref={passwordRef}
            />
            <motion.button
              whileTap={{ scale: 0.3 }}
              transition={{ ease: "easeInOut" }}
              className="font-[Merriweather] text-white font-normal p-2 bg-red-700 px-4 ml-2 rounded text-sm
        border border-red-700"
              onClick={handleFinish}
            >
              Start Now
            </motion.button>
          </form>
        </>
      )}

      <div className="absolute right-6 top-6">
        <motion.button
          className="font-[Merriweather] text-white font-normal p-1 bg-red-700 px-3 rounded text-sm border border-red-700"
          whileTap={{ scale: 0.3 }}
          transition={{ ease: "easeInOut" }}
        >
          Sign in
        </motion.button>
      </div>
    </div>
  );
};

export default Register;
