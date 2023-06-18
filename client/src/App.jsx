import React, { useContext } from "react";
import { useState, useEffect, useRef } from "react";
import useWindowSize from "./hooks/ScrollHook";
import Home from "./components/Home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className=" min-h-screen scroll-smooth" style={{ overflow: "hidden" }}>
      <div className="text-[Sen]">
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <Home /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <Home /> : <Register />} />
            <Route path="/movies" element={user && <Home type="movies" />} />
            <Route path="/series" element={user && <Home type="series" />} />
            <Route path="/watch" element={user && <Watch />} />
            <Route path="/register" element={!user ? <Register /> : <Home />} />
            <Route path="/login" element={!user ? <Login /> : <Home />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <div ref={scrollContainer}></div> */}
    </div>
  );
};

export default App;
