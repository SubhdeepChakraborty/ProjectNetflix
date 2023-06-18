import React, { useContext, useEffect, useState } from "react";
import { Publish } from "@mui/icons-material";
// import Sidebar from "../../sidebar/Sidebar";
// import Navbar from "../../navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
// import { storage } from "../../../firebase";
// import { createMovie } from "../../../context/movieContext/Apicalls";
// import { MovieContext } from "../../../context/movieContext/MovieContext";
import { storage } from "../firebase";
import { createList } from "../context/listContext/apicalls";
import { ListContext } from "../context/listContext/ListContext";
import { MovieContext } from "../context/movieContext/MovieContext";
import { getMovies } from "../context/movieContext/Apicalls";
import { useNavigate } from "react-router-dom";

const NewList = () => {
  const [list, setList] = useState(null);
  const navigate = useNavigate();

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  //   console.log(movie);

  const handleSelect = (e) => {
    // console.log(e.target.selectedOptions);
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    navigate("/lists");
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <h1 className="text-4xl font-[Merriweather] ml-3 font-semibold">
            New List
          </h1>
          <form className="mt-[10px] flex flex-wrap p-5 fixed">
            <div>
              <div className="w-[400px] flex flex-col mb-[10px] p-5">
                <label className="text-slate-700 font-semibold mb-[10px]">
                  {" "}
                  Title{" "}
                </label>
                <input
                  type="text"
                  placeholder="Popular Movies"
                  name="title"
                  onChange={handleChange}
                  className="mt-1 border-b-2 mb-3 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
                />
              </div>
              <div className="w-[400px] flex flex-col mb-[10px] p-5">
                <label className="text-slate-700 font-semibold mb-[10px]">
                  Genre
                </label>
                <input
                  type="text"
                  name="genre"
                  placeholder="Action"
                  onChange={handleChange}
                  className="mt-1 border-b-2 mb-3 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
                />
              </div>
              <div className="w-[400px] flex flex-col mb-[10px] p-5">
                <label className="text-slate-700 font-semibold mb-[10px]">
                  Type
                </label>
                <select
                  name="type"
                  onChange={handleChange}
                  className="p-[10px]"
                >
                  <option>Type</option>
                  <option value="movies">Movies</option>
                  <option value="series">Series</option>
                </select>
              </div>
            </div>
            <div>
              <div className="w-[400px] flex flex-col mb-[10px] p-5">
                <label className="text-slate-700 font-semibold mb-[10px]">
                  Content
                </label>
                <select
                  multiple
                  name="content"
                  onChange={handleSelect}
                  style={{ height: "288px" }}
                >
                  {movies.map((movie) => (
                    <option key={movie._id} value={movie._id}>
                      {movie.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <button
                onClick={handleSubmit}
                className="p-1 px-3 absolute top-[20rem]  -right-[7rem] border-none bg-slate-800 text-white font-semibold rounded"
              >
                create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewList;
