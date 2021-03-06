import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  LOADING,
} from "../types";
import api from "../../helpers/api";

export const loginUser = (data) => async (dispatch) => {
  try {
    const res = await api.post("/login", data);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.token,
    });
  } catch (err) {
    const errMsg = err.response.data;
    dispatch({
      type: LOGIN_FAIL,
      payload: errMsg.erro ? errMsg.erro : errMsg,
    });
  }
};

// logout
export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

// load spinner
export const setLoading = () => {
  return {
    type: LOADING,
  };
};

// clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
