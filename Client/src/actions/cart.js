import axios from "../helpers/axios";
import { cartConstants } from "./constants";
import {store} from "../store";
const getCartItems = () => {
  return async (dispatch) => {
    try {

      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      const res = await axios.post(`user/getCartItems`,null,{
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')},
      });
      if (res.status === 200) {
        const { cartItems } = res.data;
        if (cartItems) {
          dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: { cartItems },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (product) => {
  return async (dispatch) => {
    const {
      cart: { cartItems },
      auth,
    } = store.getState();
    const qty = cartItems[product._id]
      ? parseInt(cartItems[product._id].qty )
      : 1;
    cartItems[product._id] = {
      ...product,
      qty,
    };
  
    if (auth.authenticate) {
      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      const payload = {
        cartItems: [
          {
            product: product._id,
            quantity: qty,
            img: cartItems[product._id].img,
          },
        ],
      };
      const res = await axios.post(`/user/cart/addtocart`, payload,
      { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } });
      if (res.status === 201) {
        dispatch(getCartItems());
      }
    } else {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
    dispatch({
      type: cartConstants.ADD_TO_CART_SUCCESS,
      payload: { cartItems },
    });
  };
};


export const updateCart = () => {
  return async (dispatch) => {
    const { auth } = store.getState();
    let cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;
    if (auth.authenticate) {
      localStorage.removeItem("cart");
      if (cartItems) {
        const payload = {
          cartItems: Object.keys(cartItems).map((key) => {
            return {
              quantity: cartItems[key].qty,
              product: cartItems[key]._id,
            };
          }),
        };
        if (Object.keys(cartItems).length > 0) {
          const res = await axios.post(`/user/cart/addtocart`,payload);
          if (res.status === 201) {
            dispatch(getCartItems());
          }
        }
      } else {
        dispatch(getCartItems());
      }
    } else {
      if (cartItems) {
        dispatch({
          type: cartConstants.ADD_TO_CART_SUCCESS,
          payload: { cartItems },
        });
      }
    }
  };
};

export const removeCartItem = (payload) => {
   
  return async (dispatch) => {
    console.log("This is the payload", payload);
    try {
      const res = await axios.post(`/user/cart/removeItem`, payload, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
      });
      if (res.status === 200) {
        dispatch(getCartItems());
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export const clearCart = () => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/user/cart/clearCart`,null, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
      });
      if (res.status === 200) {
        dispatch(getCartItems());
      } else {
        const { error } = res.data;
        dispatch({ type: cartConstants.CLEAR_CART_FAILURE, payload: { error } });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
 
export { getCartItems };