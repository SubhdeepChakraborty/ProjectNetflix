import axios from "axios";

import {
  getUsersStart,
  getUsersFailure,
  getUsersSuccess,
  deleteUsersStart,
  deleteUsersSuccess,
  deleteUsersFailure,
  createUserStart,
  createUserFailure,
  createUserSuccess,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "./AuthActionUser";

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("https://server-sf9z.onrender.com/api/users/", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUsersStart());
  try {
    await axios.delete("https://server-sf9z.onrender.com/api/users/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteUsersSuccess(id));
  } catch (err) {
    dispatch(deleteUsersFailure());
  }
};

export const createUser = async (user, dispatch) => {
  dispatch(createUserStart());
  try {
    const res = await axios.post(
      "https://server-sf9z.onrender.com/api/auth/register",
      user,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    console.log(res.data);
    dispatch(createUserSuccess(res.data));
  } catch (err) {
    dispatch(createUserFailure());
  }
};

export const UpdateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await axios.put(
      "https://server-sf9z.onrender.com/api/users/" + id,
      user,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
