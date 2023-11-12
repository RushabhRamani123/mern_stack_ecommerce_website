import axios from "../helpers/axios";

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        dispatch({type: "GET_ALL_PRODUCTS_REQUEST"})
        const res = await axios.get(`products/${slug}`);
        console.log(res);
        if(res.status === 200) {
            dispatch({
                type: "GET_ALL_PRODUCTS_SUCCESS",
                payload: res.data
            })
        }
}}