import axios from "../helpers/axios";
export const addProduct = (form) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('product/create', form, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }});
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };
};
