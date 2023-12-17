import axios from '../helpers/axios';
import { categoryConstansts, productConstants} from '../actions/constants';
export const intialData = () => {
    return async (dispatch) => {
       
        try {
            dispatch({ type: categoryConstansts.GET_ALL_CATEGORIES_REQUEST });
            dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
            const res = await axios.post('admin/intialdata');

            if (res.status === 200) {
                const { categories, products } = res.data;
                console.log(categories, products);
                dispatch({
                    type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
                    payload: { categories },
                });
                dispatch({
                    type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                    payload: { products },
                })
            }
            console.log(res);
        } catch (error) {
            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: error.message },
            })
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_FAILURE,
                payload: { error: error.message },
            })
            console.log(error.message);
        }
    };
}