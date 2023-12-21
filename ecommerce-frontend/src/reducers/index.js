import { combineReducers } from "redux";
import categoryReducer from "./category";
import productReducer from "./product";
import userReducer from "./user";
import cartReducer from "./cart";
import authReducer from "./auth";
const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  user: userReducer, 
  cart: cartReducer,
});
export default rootReducer;