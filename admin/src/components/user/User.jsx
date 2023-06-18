import React from "react";
import { useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Userrows } from "./UserDummy/UserDummy";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { UserContext } from "../../context/userContext/AuthContextUser";
import { getUsers, deleteUser } from "../../context/userContext/Apicalls";

const User = () => {
  const [data, setData] = useState(Userrows);

  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "username",
      headerName: "User",
      width: 240,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img
              className="h-[40px] w-[40px] object-cover rounded-full mr-2"
              src={params.row.profilePic}
              alt="Photo"
            />
            <span>{params.row.username}</span>
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 150,
    // },
    // {
    //   field: "transaction",
    //   headerName: "Transaction",
    //   width: 160,
    // },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/user/" + params.row._id }}
              state={{ user: params.row }}
            >
              <button className="border-none px-2 py-1 rounded text-white font-bold font-[Sen] bg-gray-600">
                Edit
              </button>
            </Link>
            <div
              className="cursor-pointer ml-14"
              onClick={() => handleClick(params.row._id)}
            >
              <PersonRemoveIcon className="text-red-600" />
            </div>
          </>
        );
      },
    },
  ];

  const handleClick = (id) => {
    // console.log("Clicked");
    // setData(data.filter((item) => item.id !== id));
    deleteUser(id, dispatch);
  };
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <div style={{ height: "100%", width: "100%" }}>
            <DataGrid
              rows={users}
              columns={columns}
              autoPageSize
              // pageSize={2}
              disableRowSelectionOnClick
              checkboxSelection
              getRowId={(r) => r._id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
