import { combineReducers } from "redux";
import authReducer from "./auth";
import categoryReducer from "./category";
import userReducer from "./user";
// import productReducer from "./product";
// import orderReducer from "./order";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
});
export default rootReducer;
