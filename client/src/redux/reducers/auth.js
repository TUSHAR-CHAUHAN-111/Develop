import {
  AUTH,
  LOGOUT,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
} from "../constants";

const AuthReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case SIGN_IN:
    case SIGN_UP:
      // localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.payload };
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };
    default:
      return state;
  }
};

export default AuthReducer;
