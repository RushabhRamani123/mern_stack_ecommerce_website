import axios from '../helpers/axios';
import { categoryConstansts, productConstants} from '../actions/constants';
export const intialData = () => {
    return async (dispatch) => {
       
        try {
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
            console.log(error.message);
        }
    };
}