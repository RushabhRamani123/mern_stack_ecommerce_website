import axios from "../helpers/axios";
import { pageConstants } from "./constants";
    
export const createPage = (form) => {
  return async (dispatch) => {
    const jsonData = {};
    form.forEach((value, key) => {
        jsonData[key] = value;
        console.log(jsonData[key]);
    });

    dispatch({ type: pageConstants.CREATE_PAGE_REQUEST });
    const res = await axios.post(`admin/Createpage`, jsonData);
    if (res.status === 201) {
      dispatch({ type: pageConstants.CREATE_PAGE_SUCCESS });
      return res.data;
    } else {
      const { error } = res.data;
      dispatch({ type: pageConstants.CREATE_PAGE_FAILURE });
      return error;
    }
  };
}