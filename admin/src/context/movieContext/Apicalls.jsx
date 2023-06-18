import axios from "axios";
// import {
//   createMovieFailure,
//   createMovieStart,
//   createMovieSuccess,
//   deleteMovieFailure,
//   deleteMovieStart,
//   deleteMovieSuccess,
//   getMoviesFailure,
//   getMoviesStart,
//   getMoviesSuccess,
// } from "./MovieActions";

import {
  createMovieFailure,
  createMovieSuccess,
  createMovieStart,
  deleteMovieFailure,
  deleteMovieSuccess,
  deleteMovieStart,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
  updateMovieSuccess,
  updateMovieStart,
  updateMovieFailure,
} from "./MovieAction";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get(
      "https://server-sf9z.onrender.com/api/movies/",
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post(
      "https://server-sf9z.onrender.com/api/movies/",
      movie,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    console.log(res.data);
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

//update
export const UpdateMovie = async (id, movie, dispatch) => {
  dispatch(updateMovieStart());
  try {
    const res = await axios.put(
      "https://server-sf9z.onrender.com/api/movies/" + id,
      movie,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(updateMovieSuccess(res.data));
  } catch (err) {
    dispatch(updateMovieFailure());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("https://server-sf9z.onrender.com/api/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};
