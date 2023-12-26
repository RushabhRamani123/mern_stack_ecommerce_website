import { orderConstants } from "../actions/constants";

const initState = {
  orders: [],
};

const orderReducer = (state = initState, action) => {
    switch (action.type) {
      case orderConstants.GET_CUSTOMER_ORDER_SUCCESS:
        // alert(JSON.stringify(action.payload.orders));
        console.log(action.payload.orders);
            state = {
        ...state,
        orders: action.payload.orders,
        };
        // alert(JSON.stringify(state));
        break; 
      }
      return state;
};
export default orderReducer;