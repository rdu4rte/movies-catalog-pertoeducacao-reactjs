import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  LOADING,
} from "../types";
import decodeToken from "../../helpers/decode";

const initialState = {
  user: null,
  errors: null,
  isAuth: false,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload);
      const userDecoded = decodeToken(localStorage.getItem("token"));

      return {
        ...state,
        user: userDecoded.nome,
        isAuth: true,
        loading: false,
        errors: null,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        loading: false,
        user: null,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
