import { authConst } from "../actions/constants";
const initState = {
  name: "Rushabh",
};

export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case authConst.LOGIN:
      state = {
        ...state,
        ...action.payload,
      };
      break;
  }
  console.log(state);
  return state;
};
