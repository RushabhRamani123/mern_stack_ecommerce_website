import axios from "../helpers/axios";
import { categoryConstansts } from "./constants";
export const getAllCategory = () => {
    return async dispatch => {

        dispatch({ type: categoryConstansts.GET_ALL_CATEGORIES_REQUEST });
        const res = await axios.get('category/getCategories');
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
