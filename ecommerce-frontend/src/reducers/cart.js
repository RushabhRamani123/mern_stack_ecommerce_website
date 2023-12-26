import { cartConstants } from "../actions/constants";

const initState = {
    cartItems: {},
    updatingCart: false,
    error: null
};

const cartReducer = (state = initState, action) => {
    switch(action.type){
        case cartConstants.ADD_TO_CART_REQUEST:
            return {
                ...state,
                updatingCart: true
            }
        case cartConstants.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                cartItems: action.payload.cartItems,
                updatingCart: false
            }
        case cartConstants.ADD_TO_CART_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                updatingCart: false
            }
        case cartConstants.RESET_CART:
            return {
                ...initState,
                error: null
            }
        
        case cartConstants.UPDATE_CART_SUCCESS:
            return {
                ...state,
                cartItems: action.payload.cartItems,
                updatingCart: true 
            }
        case cartConstants.REMOVE_CART_ITEM_SUCCESS:
            return {
                ...state,
                cartItems: [],
                delecatedCart: true
            }
        default:
            return state; 
    }
}
export default cartReducer; 