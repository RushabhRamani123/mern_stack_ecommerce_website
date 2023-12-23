import axios from "../helpers/axios";
import { cartConstants } from "./constants";
import store from "../store";
const getCartItems = () => {
  return async (dispatch) => {
    try {

      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      console.log("This is the action of cart");
      console.log(localStorage.getItem('token'));
      const res = await axios.post(`user/getCartItems`,null,{
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')},
      });
      console.log(res);
      if (res.status === 200) {
        const { cartItems } = res.data;
        console.log({ getCartItems: cartItems });
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
    alert("This is the action of cart etijwe ner;n");
    console.log("addToCart::", product);
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
          },
        ],
      };
      console.log(payload);
      const res = await axios.post(`/user/cart/addtocart`, payload,
      { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } });
      console.log(res);
      if (res.status === 201) {
        dispatch(getCartItems());
      }
    } else {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    console.log("addToCart::", cartItems);

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

    console.log("upppppppppp");

    if (auth.authenticate) {
      localStorage.removeItem("cart");
      if (cartItems) {
        const payload = {
          cartItems: Object.keys(cartItems).map((key, index) => {
            return {
              quantity: cartItems[key].qty,
              product: cartItems[key]._id,
            };
          }),
        };
        if (Object.keys(cartItems).length > 0) {
          const res = await axios.post(`/user/cart/addtocart`, payload);
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

export { getCartItems };