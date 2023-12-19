import { combineReducers } from "redux";
import categoryReducer from "./category";
import productReducer from "./product";
import userReducer from "./user";
import cartReducer from "./cart";
const rootReducer = combineReducers({

  category: categoryReducer,
  product: productReducer,
  user: userReducer, 
  cart: cartReducer,
});
export default rootReducer;