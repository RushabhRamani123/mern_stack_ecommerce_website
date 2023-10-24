import { categoryConstansts } from "../actions/constants";
const initState = {
  categories: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case categoryConstansts.GET_ALL_CATEGORIES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstansts.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
        loading: false,
      };
      break;
    case categoryConstansts.GET_ALL_CATEGORIES_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    default:
      break;
  }
  return state;
};
