import { authConstants } from "../actions/constants";
const initState = {
  error: null,
  message: "",
  loading: false,
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    // case userContants.USER_REGISTER_REQUEST:
    //   state = {
    //     ...state,
    //     loading: true,
    //   };
    //   break;
      case authConstants.LOGIN_SUCCESS:
      console.log("Login Success");
      console.log(action.payload);
      return{
        ...state,
        loading: false,
        message: action.payload,
      };
   
    // case userContants.USER_REGISTER_FAILURE:
    //   state = {
    //     ...state,
    //     loading: false,
    //     error: action.payload.error,
    //   };
      //   break;
      default:
        return state;
  }

};

export default userReducer; 