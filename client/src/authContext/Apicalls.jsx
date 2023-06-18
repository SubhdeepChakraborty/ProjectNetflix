import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://server-sf9z.onrender.com/api/auth/login",
      user
    );
    dispatch(loginSuccess(res.data));
    console.log(res);
  } catch (err) {
    dispatch(loginFailure());
    console.log(err);
  }
};
