import axios from "../helpers/axios";
import { cartConstants, userConstants } from "./constants";
import {getCartItems} from './cart'
export const addOrder = (payload) => {
    return async (dispatch) => {
      try {
          const res = await axios.post(`/addOrder`, payload, {
            headers: {
              Authorization: `Bearer ` + localStorage.getItem("token"),
            },
        });
        dispatch({ type: userConstants.ADD_USER_ORDER_REQUEST });
        if (res.status === 201) {
          
            const { order } = res.data;
          dispatch({
            type: cartConstants.RESET_CART,
          });
          dispatch({
            type: userConstants.ADD_USER_ORDER_SUCCESS,
            payload: { order },
          });
          dispatch(getCartItems());
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
            type: userConstants.ADD_USER_ORDER_FAILURE,
            payload: { error },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
};
export const getOrders = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/getOrders`,{headers: {Authorization: `Bearer ` + localStorage.getItem("token")}});
      dispatch({ type: userConstants.GET_USER_ORDER_REQUEST });
      if (res.status === 200) {
        console.log(res);
        const { orders } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_SUCCESS,
          payload: { orders },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// single order with complete info and delivery location
export const getOrder = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/getOrder`, payload);
      dispatch({ type: userConstants.GET_USER_ORDER_DETAILS_REQUEST });
      if (res.status === 200) {
        console.log(res);
        const { order } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_DETAILS_SUCCESS,
          payload: { order },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_DETAILS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};