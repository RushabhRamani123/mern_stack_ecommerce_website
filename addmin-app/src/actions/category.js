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
        dispatch({type: categoryConstansts.ADD_NEW_CATEGORY_REQUEST});
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
export const updateCategory = (formData) => {
    return async dispatch => {
      
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
            console.log(jsonData[key]);
        });

        dispatch({type: categoryConstansts.UPDATE_CATEGORIES_REQUEST});
        const res = await axios.post('/category/update', jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        if (res.status === 200) {
            dispatch(getAllCategory());
            dispatch({
                type: categoryConstansts.ADD_NEW_CATEGORY_SUCCESS,
                payload: { category: res.data }
            })
        }
        else {
            dispatch({
                type: categoryConstansts.ADD_NEW_CATEGORY_FAILURE,
                payload: res.data.error})
        }
    }
}
export const deleteCategory = (Ids) => {
    return async dispatch => {
        dispatch({ type: categoryConstansts.DELETE_CATEGORIES_REQUEST });
        const res = await axios.post('/category/delete', { payload: { Ids } },
            { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } });
        if (res.status === 200) {
            dispatch(getAllCategory());
            dispatch({
                type: categoryConstansts.DELETE_CATEGORIES_SUCCESS,
                payload: { categoryId: Ids }
            });
        }
        else {
            dispatch({
                type: categoryConstansts.DELETE_CATEGORIES_FAILURE,
                payload: res.data.error
            });
        }
    }
}
