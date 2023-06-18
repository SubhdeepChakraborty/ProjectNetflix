import React, { useContext, useEffect, useState } from "react";
import { Publish } from "@mui/icons-material";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import { storage } from "../../../firebase";
import { createMovie } from "../../../context/movieContext/Apicalls";
import { MovieContext } from "../../../context/movieContext/MovieContext";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setimgTitle] = useState(null);
  const [imgSm, setimgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);

  //Firebase Storage Logic
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  //   item.forEach((element) => {
  //     const uploadTask = storage
  //       .ref(`/items/${element.file.name}`)
  //       .put(element);
  //     uploadTask.on(
  //       "state_changes",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("upload is" + progress + "% done.");
  //       },
  //       (err) => {
  //         console.log(err);
  //       },
  //       () => {
  //         uploadTask.snapshot.ref.getDowloadURL().then((url) => {
  //           setMovie((prev) => {
  //             return { ...prev, [element.label]: url };
  //           });
  //           setUploaded((prev) => prev + 1);
  //         });
  //       }
  //     );
  //   });
  // };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  console.log(movie);

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
    navigate("/movies");
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
            New Movie
          </h1>
          <form className="mt-[10px] flex flex-wrap p-5">
            <div className="w-[400px] flex flex-col mb-[10px] p-5">
              <label className="text-slate-700 font-semibold mb-[10px]">
                Image
              </label>
              <input
                type="file"
                id="img"
                name="img"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>
            <div className="w-[400px] flex flex-col mb-[10px] p-5">
              <label className="text-slate-700 font-semibold mb-[10px]">
                {" "}
                Title image
              </label>
              <input
                type="file"
                id="imgTitle"
                name="imgTitle"
                onChange={(e) => setimgTitle(e.target.files[0])}
              />
            </div>
            <div className="w-[400px] flex flex-col mb-[10px] p-5">
              <label className="text-slate-700 font-semibold mb-[10px]">
                {" "}
                Thumbnail image
              </label>
              <input
                type="file"
                id="imgSm"
                name="imgSm"
                onChange={(e) => setimgSm(e.target.files[0])}
              />
            </div>
            <div className="w-[400px] flex flex-col mb-[10px] p-5">
              <label className="text-slate-700 font-semibold mb-[10px]">
                {" "}
                Title{" "}
              </label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                className="mt-1 border-b-2 mb-3 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
              />
            </div>
            <div className="w-[400px] flex flex-col mb-[10px] p-5">
              <label className="text-slate-700 font-semibold mb-[10px]">
                Description
              </label>
              <input
                type="text"
                placeholder="description"
                name="desc"
                onChange={handleChange}
                className="mt-1 border-b-2 mb-3 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
              />
            </div>
            <div className="w-[400px] flex flex-col mb-[10px] p-5">
              <label className="text-slate-700 font-semibold mb-[10px]">
                Year
              </label>
              <input
                type="text"
                name="year"
                placeholder="Year"
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
                placeholder="Genre"
                onChange={handleChange}
                className="mt-1 border-b-2 mb-3 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
              />
            </div>
            <div className="w-[400px] flex flex-col mb-[10px] p-5">
              <label className="text-slate-700 font-semibold mb-[10px]">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                placeholder="Duration"
                onChange={handleChange}
                className="mt-1 border-b-2 mb-3 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
              />
            </div>
            <div className="w-[400px] flex flex-col mb-[10px] p-5">
              <label className="text-slate-700 font-semibold mb-[10px]">
                Limit
              </label>
              <input
                type="text"
                name="limit"
                placeholder="limit"
                onChange={handleChange}
                className="mt-1 border-b-2 mb-3 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
              />
            </div>
            <div className="w-[400px] flex flex-col mb-[10px] p-5">
              <label className="text-slate-700 font-semibold mb-[10px]">
                Series ?
              </label>
              <select
                name="isSeries"
                id="isSeries"
                className="p-[10px]"
                onChange={handleChange}
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
            <div className="w-[400px] flex flex-col mb-[10px] p-5">
              <label className="text-slate-700 font-semibold mb-[10px]">
                Trailer
              </label>
              <input
                type="file"
                name="trailer"
                onChange={(e) => setTrailer(e.target.files[0])}
              />
            </div>
            <div className="w-[400px] flex flex-col mb-[10px] p-5">
              <label className="text-slate-700 font-semibold mb-[10px]">
                Video
              </label>
              <input
                type="file"
                name="video"
                onChange={(e) => setVideo(e.target.files[0])}
              />
            </div>
          </form>
          {uploaded === 5 ? (
            <>
              <div>
                <button
                  onClick={handleSubmit}
                  className="p-1 px-3 absolute top-[50.7rem] right-[4rem] border-none bg-slate-800 text-white font-semibold rounded"
                >
                  create
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <button
                  onClick={handleUpload}
                  className="p-1 px-3 absolute top-[50.7rem] right-[4rem] border-none bg-slate-800 text-white font-semibold rounded"
                >
                  upload
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
