import { productConstants } from '../actions/constants';

const initState = {
  products: [],
  priceRange: {},
  productsByPrice: {},
  pageRequest: false,
  page: {},
  error: null,
  productDetails: {},
  loading: false,
};
/* GET_ALL_PRODUCTS_REQUEST,
   ,
   GET_ALL_PRODUCTS_FAILURE, */
const productReducer = (state = initState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_SLUG:      
      return {
        ...state,
        products: action.payload,
      }; 
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS: 
      return {
        ...state,
        productDetails: action.payload,
      }
    default:
      return state;
  }

};

export default productReducer;

