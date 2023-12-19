import { cartConstants } from "../actions/constants";

const initState = {
    cartItems: {},
    updatingCart: false,
    error: null
};

const cartReducer = (state = initState, action) => {
    switch(action.type){
        // case cartConstants.ADD_TO_CART_REQUEST:
            // state = {
            //     ...state,
            //     updatingCart: 
            // }
            // break;
        case cartConstants.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                cartItems: action.payload.cartItems,
                updatingCart: false
            }
        case cartConstants.UPDATE_CART_SUCCESS:
            return {
                ...state,
                cartItems: action.payload.cartItems,
                updatingCart: true 
            }
        // case cartConstants.ADD_TO_CART_FAILURE:
            // state = {
            //     ...state,
            //     updatingCart: false,
            //     error: action.payload.error
            // }
            // break;
        // case cartConstants.RESET_CART:
            // state = {
            //     ...initState
            // }
    }
    return state;
}
export default cartReducer; 