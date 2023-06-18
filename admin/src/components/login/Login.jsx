import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/Apicalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="bg-black/[0.6] h-[100vh] w-[100vw]">
      <div className="h-full w-full flex items-center justify-center">
        <form className=" p-5">
          <div className="flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="Email"
              className="mb-4 rounded px-2 p-1 w-[300px] outline-none border-b-2 border-b-black"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              className="mb-4 rounded px-2 p-1 w-[300px] outline-none border-b-2 border-b-black"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-[300px] outline-none px-2 p-1 rounded bg-slate-600 text-white"
              onClick={handleLogin}
              disabled={isFetching}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
