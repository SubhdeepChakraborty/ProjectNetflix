// import axios from "axios";
// import { LoginFailure, LoginSucess, LoginStart } from "./AuthAction";

// export const login = async (user, dispatch) => {
//   dispatch(LoginStart());
//   try {
//     const res = await axios.post("/api/auth/login", user);
//     console.log(res.data);
//     dispatch(LoginSucess(res.data));
//   } catch (err) {
//     dispatch(LoginFailure());
//   }
// };

import axios from "axios";
import { loginFailure, loginSuccess, loginStart } from "./AuthAction";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://server-sf9z.onrender.com/api/auth/login",
      user
    );
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
