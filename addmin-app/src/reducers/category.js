import { categoryConstansts } from "../actions/constants";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryConstansts.GET_ALL_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case categoryConstansts.GET_ALL_CATEGORIES_SUCCESS:
      console.log("Action received:", action.type);
      console.log("Payload:", action.payload);
      return {
        ...state,
        categories: action.payload.categories,
        loading: false,
      };
    case categoryConstansts.GET_ALL_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default categoryReducer;
