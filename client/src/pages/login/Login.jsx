import React from "react";
import { login } from "../../authContext/Apicalls";
import { AuthContext } from "../../authContext/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center relative">
      <img
        className="h-[100px] w-[270px] absolute top-16 left-[34rem]"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt=""
      />
      <div>
        <form className="w-[300px] h-[300px] p-8 rounded">
          <div className="flex flex-col items-center justify-center mb-5 text-white">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-[350px] p-2 px-2 rounded  text-white
              bg-gray-600 font-[Sen] font-medium outline-none border-b-2 border-b-gray-600"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-[350px] p-2 px-2 mt-5 mb-5 rounded 
              text-white bg-gray-600 font-[Sen] font-medium outline-none border-b-2 border-b-gray-600"
            />
            <button
              onClick={handleLogin}
              className="text-white w-[350px] rounded p-2 bg-red-700 font-[Merriweather]"
            >
              {" "}
              Sign in
            </button>
          </div>
          <span className="text-gray-600  font-[Merriweather] font-medium  text-sm">
            New to Netflix ?{" "}
            <Link to="/register">
              {" "}
              <span className="text-blue-950 font-semibold">Sign up now</span>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
