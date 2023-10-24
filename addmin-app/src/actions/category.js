import axios from "../helpers/axios";
import { categoryConstansts } from "../actions/constants";
export const getCategory = () => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstansts.GET_ALL_CATEGORIES_REQUEST,
    });
    const res = await axios.get("/category/get");
    console.log(res);
    if (res.status === 200) {
      const { categoryList } = res.data;
      dispatch({
        type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
        payload: {
          categories: categoryList,
        },
      });
    } else {
      dispatch({
        type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
