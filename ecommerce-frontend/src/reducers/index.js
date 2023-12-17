import { combineReducers } from "redux";
import categoryReducer from "./category";
import productReducer from "./product";
import userReducer from "./user";
const rootReducer = combineReducers({

  category: categoryReducer,
  product: productReducer,
  user: userReducer, 
});
export default rootReducer;