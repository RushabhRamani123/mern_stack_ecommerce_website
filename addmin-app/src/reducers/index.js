import { combineReducers } from "redux";
import authReducer from "./auth";
// import categoryReducer from "./category";
// import productReducer from "./product";
// import orderReducer from "./order";

const rootReducer = combineReducers({
  auth: authReducer,
  // category: categoryReducer,
  // product: productReducer,
  // order: orderReducer,
});
export default rootReducer;
