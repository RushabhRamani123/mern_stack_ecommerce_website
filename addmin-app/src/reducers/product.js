import { productConstants } from "../actions/constants";
const initialSate = {
    products: []
}
export default (state = {initialSate}, action) => {
    switch (action.type) {
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                products: action.payload.products,
            };
            break;
    }
    return state;
}