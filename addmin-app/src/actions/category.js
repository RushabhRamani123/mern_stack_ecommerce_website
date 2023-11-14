import axios from "../helpers/axios";
import { categoryConstansts } from "./constants";
export const getAllCategory = () => {
    return async dispatch => {

        dispatch({ type: categoryConstansts.GET_ALL_CATEGORIES_REQUEST });
        const res = await axios.get('category/getCategories');
        console.log(res);
        if (res.status === 200) {

            const { categoryList } = res.data;

            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories: categoryList }
            });
        } else {
            dispatch({ type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE, payload: { error: res.data.error } });
        }
    }
}

export const addCategory = (form) => {
    return async dispatch => {
        dispatch({
            type: categoryConstansts.ADD_NEW_CATEGORY_REQUEST

        });
        try {
            const res = await axios.post('category/create', form, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
           });
            if (res.status === 200) {
                console.log(res);
                dispatch({
                    type: categoryConstansts.ADD_NEW_CATEGORY_SUCCESS,
                    payload: { category: res.data}
                });
            } else {
                dispatch({
                    type: categoryConstansts.ADD_NEW_CATEGORY_FAILURE,
                    payload: res.data.error
                });
            }
        } catch (error) {   
            console.log(error.response);
        }

    }
}
export const updateCategories = (form) => {
    return async dispatch => {
        // dispatch({ type: categoryConstansts.UPDATE_CATEGORIES_REQUEST });
        const res = await axios.post(`/category/update`, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
      if (res.status === 201) {
        console.log(res);
            // dispatch({ type: categoryConstansts.UPDATE_CATEGORIES_SUCCESS });
            // dispatch(getAllCategory());
      } else {
        console.log(res.data.error);
            // const { error } = res.data;
            // dispatch({
            //     type: categoryConstansts.UPDATE_CATEGORIES_FAILURE,
            //     payload: { error }
            // });
        }
    }
  }