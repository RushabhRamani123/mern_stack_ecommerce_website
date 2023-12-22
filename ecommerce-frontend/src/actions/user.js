import {userConstants} from './constants'
import axios from "../helpers/axios";

export const getAddress = () => {
  return async (dispatch) => {
    try {
      // alert("get address");
      const res = await axios.post(`/user/getaddress`, null, {
        headers: {
          Authorization: 'Bearer '+ `${localStorage.getItem("token")}`,
        },
      });
      dispatch({ type: userConstants.GET_USER_ADDRESS_REQUEST }); 
      if (res.status === 200) {
        const {
          userAddress: { address },
        } = res.data;
        dispatch({
          type: userConstants.GET_USER_ADDRESS_SUCCESS,
          payload: { address },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_USER_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addAddress = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/user/address/create`, { payload },{
        headers: {
          Authorization: 'Bearer '+ `${localStorage.getItem("token")}`,
        },
      });
      dispatch({ type: userConstants.ADD_USER_ADDRESS_REQUEST });
      if (res.status === 201) {
        console.log(res);
        const {
          address: { address },
        } = res.data;
        dispatch({
          type: userConstants.ADD_USER_ADDRESS_SUCCESS,
          payload: { address },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.ADD_USER_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const signup = (user) => {
    console.log(user);
    alert("signup");
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    const res = await axios.post(`/signup`, {
      ...user,
    });
    console.log(res.data);
    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: { message },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: userConstants.USER_REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};
