import { categoryConstansts } from "../actions/constants";
const initialState = {
  categories: [],
  loading: false,
  error: null,
};
const buildNewCategories = (parentId, categories, category) => {
  let myCategories = [];
  console.log(parentId)
  if (parentId == undefined) {
    return [
      ...categories,
      {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        type: category.type,
        children: []
      }
    ];
  }
  
  for (let cat of categories) {
    if (cat._id == parentId) {
      const newCategory = {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        parentId: category.parentId,
        type: category.type,
        children: []
      };
      myCategories.push({
        ...cat,
        children: cat.children.length > 0 ? [...cat.children, newCategory] : [newCategory]
      })
    } else {
      myCategories.push({
        ...cat,
        children: cat.children ? buildNewCategories(parentId, cat.children, category) : []
      });
    }
  }

  return myCategories; 
}
const categoryReducer = (state = initialState, action) => {
  let categoriesData; 

  switch (action.type) {
    case categoryConstansts.GET_ALL_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case categoryConstansts.GET_ALL_CATEGORIES_SUCCESS:
      console.log(action.payload.categories);
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
    case categoryConstansts.ADD_NEW_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case categoryConstansts.ADD_NEW_CATEGORY_SUCCESS: 
      categoriesData = buildNewCategories(action.payload.category.parentId, state.categories, action.payload.category);
      return {
        ...state,
        categories: categoriesData, 
        loading: false,
      }
    case categoryConstansts.ADD_NEW_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state;
  }
};
export default categoryReducer;