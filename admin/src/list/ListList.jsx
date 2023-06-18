import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteForeverOutlined } from "@mui/icons-material";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
// import { MovieContext } from "../../context/movieContext/MovieContext";
// import { deleteMovie, getMovies } from "../../context/movieContext/Apicalls";
import { ListContext } from "../context/listContext/ListContext";
import { deleteList, getLists } from "../context/listContext/apicalls";

const ListList = () => {
  const { lists, dispatch } = useContext(ListContext);
  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  //   const [data, setData] = useState(Productrows);

  const handleClick = (id) => {
    // console.log("Clicked");
    // setData(data.filter((item) => item.id !== id));
    deleteList(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    { field: "title", headerName: "title", width: 220 },
    { field: "genre", headerName: "Genre", width: 90 },
    { field: "type", headerName: "type", width: 90 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 150,
    // },
    // {
    //   field: "price",
    //   headerName: "Price",
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
              to={{ pathname: "/list/" + params.row._id }}
              state={{ list: params.row }}
            >
              <button className="border-none px-2 py-1 rounded text-white font-bold font-[Sen] bg-gray-600">
                Edit
              </button>
            </Link>
            <div
              className="cursor-pointer ml-14"
              onClick={() => handleClick(params.row._id)}
            >
              <DeleteForeverOutlined className="text-red-600" />
            </div>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <div style={{ height: "100%", width: "100%" }} className="">
            <DataGrid
              rows={lists}
              columns={columns}
              autoPageSize
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

export default ListList;
