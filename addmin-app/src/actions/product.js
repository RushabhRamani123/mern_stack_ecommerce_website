import { productConstants } from "../actions/constants";
import axios from "../helpers/axios";
export const addProduct = (form) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('product/create', form, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }});
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };
};

  export  const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
      const res = await axios.post(`product/getProducts`);
      if (res.status === 200) {
        const { products } = res.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products },
        });
      } else {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
