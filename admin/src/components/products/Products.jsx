import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Productrows } from "./productDummy/ProductDummy";
import { Link } from "react-router-dom";
import { DeleteForeverOutlined } from "@mui/icons-material";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/Apicalls";

const Products = () => {
  const { movies, dispatch } = useContext(MovieContext);
  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const [data, setData] = useState(Productrows);

  const handleClick = (id) => {
    // console.log("Clicked");
    // setData(data.filter((item) => item.id !== id));
    deleteMovie(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "movie",
      headerName: "Movie",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img
              className="h-[40px] w-[40px] object-cover rounded-full mr-2"
              src={params.row.img}
              alt="Girl Photo"
            />
            <span>{params.row.title}</span>
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "limit", headerName: "Limit", width: 120 },
    { field: "isSeries", headerName: "Series", width: 120 },
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
              to={{ pathname: "/movies/" + params.row._id }}
              state={{ movie: params.row }}
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
              rows={movies}
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

export default Products;
