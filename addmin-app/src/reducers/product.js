import { productConstants } from "../actions/constants";
const initialSate = {
    products: []
}
export default (state = { initialSate }, action) => {

    switch (action.type) {
        case productConstants.GET_ALL_PRODUCTS_REQUEST:
            return {
                ...state,
            }
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            return{
                ...state,
                products: action.payload.products,
            };
        case productConstants.GET_ALL_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            }
        case productConstants.ADD_PRODUCT_REQUEST:
            return {
                ...state,
            }
        case productConstants.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
            }
        case productConstants.ADD_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            }
        case productConstants.DELETE_PRODUCT_BY_ID_SUCCESS: 
            return {
                ...state,
                products: state.products.filter((product) => product._id !== action.payload.product._id),
            };
        default:
            return state;
    }
}