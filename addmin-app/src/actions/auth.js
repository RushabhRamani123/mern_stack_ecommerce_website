import axios from "../helpers/axios";
import { authConst } from "./constants";
export const login = (user) => {
  return async (dispatch) => {
    dispatch({
      type: authConst.LOGIN_REQUEST,
    });
    const res = await axios.post("/admin/signin", {
      email: user.email,
      password: user.password,
    });
    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConst.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConst.LOGIN_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
export const isuserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConst.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConst.LOGIN_FAILURE,
        payload: {
          error: { error: "Please login first" },
        },
      });
    }
  };
};
