import axios from "../helpers/axios";
export const addProduct = (form) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('product/create', form, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTIwZjg0YjA2ZGIxZmRkOTBhNTBjMmYiLCJpYXQiOjE2OTg5MTUzODMsImV4cCI6MTY5ODkxODk4M30.IKl6z9dvOCjb0cgk2r6Bnj2C4hnXOjBU_YVtY8HT6yQ'
        }});
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };
};
