import { authConst } from "../actions/constants";
const initState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case authConst.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConst.LOGIN_SUCCESS:
      state = {
        ...state,
        authenticate: true,
        user: action.payload.user,
        token: action.payload.token,
      };
  }
  if (action.type === authConst.LOGIN_SUCCESS) {
    console.log(state);
  }
  return state;
};
