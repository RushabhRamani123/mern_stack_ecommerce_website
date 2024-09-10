import { userConstants } from "../actions/constants";

const initState = {
    orders: [],
    loading: false,
    error: null,
};

const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case userConstants.GET_USER_ORDER_SUCCESS:
            state = {
                ...state,
                orders: action.payload.orders,
            };
            break;
    }
    return state;
}
export default orderReducer; 