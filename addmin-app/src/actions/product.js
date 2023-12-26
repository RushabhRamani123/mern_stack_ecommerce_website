import { productConstants } from "../actions/constants";
import axios from "../helpers/axios";
import { intialData } from "./intialData"
export const addProduct = (form) => {
  return async (dispatch) => {
    try {
      dispatch({ type: productConstants.ADD_PRODUCT_REQUEST });
      const res = await axios.post(`product/create`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.status === 201) {
        dispatch({ type: productConstants.ADD_PRODUCT_SUCCESS });
        dispatch(intialData());
      } else {
        dispatch({ type: productConstants.ADD_PRODUCT_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};


// const getProducts = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
//       const res = await axios.post(`product/getProducts`);
//       alert("product added successfully");
//       if (res.status === 200) {
//         const { products } = res.data;
//         console.log(products);  
//         dispatch({
//           type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
//           payload: { products },
//         });
//       } else {
//         dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILURE });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };


export const deleteProductById = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`product/deleteProductById`, {
        data: { payload },
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_REQUEST });
      if (res.status === 202) {
        dispatch(intialData());
        dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_SUCCESS });
      } else {
        const { error } = res.data;
        dispatch(intialData());
        dispatch({
          type: productConstants.DELETE_PRODUCT_BY_ID_FAILURE,
          payload: {
            error,
          },
         
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
