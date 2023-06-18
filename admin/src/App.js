import React, { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import User from "./components/user/User";
import UserPage from "./components/user/UserPage/UserPage";
import NewUser from "./components/user/NewUser/NewUser";
import Products from "./components/products/Products";
import ProductEdit from "./components/products/productEdit/productEdit";
import NewProduct from "./components/products/newproduct/NewProduct";
import Login from "./components/login/Login";
import { useLocation } from "react-router-dom";
import { AuthContext } from "./context/authContext/AuthContext";
import ListList from "./list/ListList";
import List from "./list/List";
import NewList from "./list/NewList";

const App = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/users" element={user ? <User /> : <Login />} />
        <Route path="/user/:userId" element={user ? <UserPage /> : <Login />} />
        <Route path="/newuser" element={user ? <NewUser /> : <Login />} />
        <Route path="/movies" element={user ? <Products /> : <Login />} />
        <Route
          path="/movies/:productId"
          element={user ? <ProductEdit /> : <Login />}
        />
        <Route path="/newMovie" element={user ? <NewProduct /> : <Login />} />
        <Route path="/lists" element={user ? <ListList /> : <Login />} />
        <Route path="/list/:Id" element={user ? <List /> : <Login />} />
        <Route path="/newlist" element={user ? <NewList /> : <Login />} />
      </Routes>
    </div>
  );
};

export default App;
