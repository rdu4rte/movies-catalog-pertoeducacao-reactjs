import {
  FETCH_MOVIES,
  SINGLE_MOVIE,
  LOADING,
  FAV_MOVIE,
  UNFAV_MOVIE,
} from "../types";
import api from "../../helpers/api";
import setToken from "../../helpers/setToken";

export const fetchMovies = () => async (dispatch) => {
  setToken(localStorage.getItem("token"));

  try {
    const res = await api.get("/filmes");

    dispatch({
      type: FETCH_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
  }
};

export const getMovie = (id) => async (dispatch) => {
  setToken(localStorage.getItem("token"));

  try {
    const res = await api.get(`/filmes/${id}`);

    dispatch({
      type: SINGLE_MOVIE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
  }
};

export const favMovie = (data) => (dispatch) => {
  dispatch({
    type: FAV_MOVIE,
    payload: data,
  });
};

export const unfavMovie = (id) => (dispatch) => {
  dispatch({
    type: UNFAV_MOVIE,
    payload: id,
  });
};

// load spinner
export const setLoading = () => {
  return {
    type: LOADING,
  };
};
