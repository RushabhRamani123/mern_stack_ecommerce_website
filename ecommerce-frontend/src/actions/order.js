import axios from "../helpers/axios";
import { cartConstants, userConstants } from "./constants";
export const addOrder = (payload) => {
    return async (dispatch) => {
      try {
          const res = await axios.post(`/addOrder`, payload, {
            headers: {
              Authorization: `Bearer ` + localStorage.getItem("token"),
            },
        });
        // dispatch({ type: userConstants.ADD_USER_ORDER_REQUEST });
        if (res.status === 201) {
          console.log(res);
            const { order } = res.data;
            console.log({ addOrder: order });
        //   dispatch({
        //     type: cartConstants.RESET_CART,
        //   });
        //   dispatch({
        //     type: userConstants.ADD_USER_ORDER_SUCCESS,
        //     payload: { order },
        //   });
          // const {
          //   address: { address },
          // } = res.data;
          // dispatch({
          //   type: userConstants.ADD_USER_ADDRESS_SUCCESS,
          //   payload: { address },
          // });
        } else {
          const { error } = res.data;

            console.log(error)
        //   dispatch({
        //     type: userConstants.ADD_USER_ORDER_FAILURE,
        //     payload: { error },
        //   });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };