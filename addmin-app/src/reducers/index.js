import { combineReducers } from "redux";
import authReducer from "./auth";
import categoryReducer from "./category";
import userReducer from "./user";
import productReducer from "./product";
import pageReducer from "./page";
// import orderReducer from "./order";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  page: pageReducer,
});

export default rootReducer;
