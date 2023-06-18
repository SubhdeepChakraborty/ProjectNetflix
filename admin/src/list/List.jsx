import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import Chart from "../../home/chart/Chart";
// import { ProductData } from "../productDummy/ProductDummy";
import { Publish } from "@mui/icons-material";

import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

import { useLocation } from "react-router-dom";
// import { MovieContext } from "../../../context/movieContext/MovieContext";
// import { UpdateMovie } from "../../../context/movieContext/Apicalls";
import { storage } from "../firebase";
import { ListContext } from "../context/listContext/ListContext";

const List = () => {
  const location = useLocation();
  const list = location.state.list;
  console.log(list);
  //   const id = movie._id;
  // console.log(id);
  // console.log(movie);

  //   const [list, setList] = useState(null);
  //   const [trailer, setTrailer] = useState(null);
  //   const [video, setVideo] = useState(null);

  //update pls
  //   const [uploaded, setUploaded] = useState(0);

  //   const { dispatch } = useContext(ListContext);

  //   const handleChange = (e) => {
  //     const value = e.target.value;
  //     setList({ ...movies, [e.target.name]: value });
  //   };

  //   console.log(movies);

  //   const upload = (items) => {
  //     items.forEach((item) => {
  //       //So we can upload duplicate photos or videos in firebase
  //       const fileName = new Date().getTime() + item.label + item.file.name;
  //       const UploadTask = storage.ref(`/items/${fileName}`).put(item.file);
  //       UploadTask.on(
  //         "state_changed",
  //         (snapshot) => {
  //           const progress =
  //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           console.log("Upload is" + progress + "% done");
  //         },
  //         (error) => {
  //           console.log(error);
  //         },
  //         () => {
  //           UploadTask.snapshot.ref.getDownloadURL().then((url) => {
  //             setMovies((prev) => {
  //               return { ...prev, [item.label]: url };
  //             });
  //             setUploaded((prev) => prev + 1);
  //           });
  //         }
  //       );
  //     });
  //   };

  //   const handleUpload = (e) => {
  //     e.preventDefault();
  //     upload([
  //       { file: trailer, label: "trailer" },
  //       { file: video, label: "video" },
  //     ]);
  //   };

  //   console.log(movies);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     alert("Process Finished");
  //     UpdateMovie(id, movies, dispatch);
  //   };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <>
            <div className="flex items-center justify-between p-5">
              <div>
                <span className="text-4xl font-[Merriweather] ml-3 font-semibold">
                  List
                </span>
              </div>
              <div>
                <>
                  <Link to="/newList">
                    <button className="rounded py-1 px-2 font-[Sen] mr-7 text-white bg-slate-500">
                      Create
                    </button>
                  </Link>
                </>
              </div>
            </div>
            <div className="flex gap-2">
              {/* <div className="flex-[1] shadow-lg"> */}
              {/* <Chart
                  data={ProductData}
                  dataKey="sales"
                  title="Sales Performance"
                  grid
                />

                <div className="p-6 w-full">
                  <span className="font-[Merriweather] font-semibold text-slate-500 text-lg">
                    Discription :{" "}
                  </span>
                  <span className="break-before-auto fomt-[Sen] text-slate-500 text-lg">
                    Apple Inc., formerly Apple Computer, Inc., American
                    manufacturer of personal computers, smartphones, tablet
                    computers, computer peripherals, and computer software and
                    one of the most recognizable brands in the world
                  </span>
                </div> */}
              {/* </div> */}
              <div className=" w-[500px] shadow-lg">
                <div className="flex items-center justify-between p-5">
                  {/* <img
                    className="h-[60px] w-[60px] object-cover rounded-full mr-2"
                    src={movie.img}
                    alt="Tablet Photo"
                  /> */}
                  <div className="flex flex-col items-start">
                    <span className="font-[Sen] font-semibold text-lg">
                      {list.title}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <span className="font-[Merriweather] font-semibold text-slate-500">
                    id :
                  </span>
                  <span className="font-[Sen] font-bold ">{list._id}</span>
                </div>
                <div className="flex items-center justify-between p-5">
                  <span className="font-[Merriweather] font-semibold text-slate-500">
                    Genre :
                  </span>
                  <span className="font-[Sen] font-bold ">{list.genre}</span>
                </div>

                <div className="flex items-center justify-between p-5">
                  <span className="font-[Merriweather] font-semibold text-slate-500">
                    Type :
                  </span>
                  <span className="font-[Sen] font-bold ">{list.type}</span>
                </div>
              </div>
            </div>
            <div className="shadow-lg p-5">
              <form className="flex grow">
                <div className="flex flex-col">
                  <div className="w-[400px] flex flex-col mt-2 mr-5 p-2">
                    <label className="font-[Sen] text-slate-500 font-semibold text-lg">
                      List Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder={list.title}
                      //   onChange={handleChange}
                      className="mt-1 border-b-2 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
                    />
                  </div>
                  <div className="w-[400px] flex flex-col mt-2 mr-5 p-2">
                    <label className="font-[Sen] text-slate-500 font-semibold text-lg">
                      Genre
                    </label>
                    <input
                      type="text"
                      name="year"
                      placeholder={list.genre}
                      //   onChange={handleChange}
                      className="mt-1 border-b-2 mb-3 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
                    />
                    <label className="font-[Sen] text-slate-500 font-semibold text-lg">
                      Type
                    </label>
                    <input
                      type="text"
                      name="genre"
                      placeholder={list.type}
                      //   onChange={handleChange}
                      className="mt-1 border-b-2 mb-3 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
                    />
                  </div>
                </div>
                <div>
                  <button
                    // onClick={handleSubmit}
                    className="p-1 px-3 border-none bg-slate-800 ml-[27rem] mt-[2rem] text-white font-semibold rounded"
                  >
                    Update
                  </button>
                </div>
                {/* <div className="w-full relative">
                  <img
                    className=" h-[200px] w-[200px] object-cover ml-80 mt-5 rounded"
                    src={movie.img}
                    alt="Girl Photo"
                  />
                  <label
                    htmlFor="file"
                    className="cursor-pointer right-[3.4px] top-44 mb-9 absolute"
                  >
                    <Publish />
                  </label>
                  <input type="file" id="file" className="hidden" />

                  {uploaded === 2 ? (
                    <>
                      <div>
                        <button
                          onClick={handleSubmit}
                          className="p-1 px-3 border-none bg-slate-800 ml-[27rem] mt-[2rem] text-white font-semibold rounded"
                        >
                          complete?
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <button
                          onClick={handleUpload}
                          // className="p-1 px-3 absolute top-[50.7rem] right-[4rem] border-none bg-slate-800 text-white font-semibold rounded"
                          className="p-1 px-3 border-none bg-slate-800 ml-[27rem] mt-[2rem] text-white font-semibold rounded"
                        >
                          update
                        </button>
                      </div>
                    </>
                  )}
                </div> */}
              </form>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default List;
