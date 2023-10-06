import { authConst } from "./constants";
export const login = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({
      type: authConst.LOGIN,
      payload: {
        ...user,
      },
    });
  };
};
