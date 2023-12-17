import axios from "../helpers/axios";
import { productConstants } from "../actions/constants";
export const getProductsBySlug = (slug) => {
    return async dispatch => {
        dispatch({type: productConstants.GET_ALL_PRODUCTS_REQUEST});
        const res = await axios.get(`products/${slug}`);
        console.log(res);
        if (res.status === 200) {
    

            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: res.data
            })
        }
    }
}
export const getProductDetailsById = (payload) => {
    return async dispatch => {
        const { productId } = payload;
        console.log(productId);
        let res = await axios.get(`/product/${productId}`);
        console.log(res.data);
        if (res.status === 200) {

            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: res.data
            })
        }
        else {
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: res.data
            })
        }
    }
}