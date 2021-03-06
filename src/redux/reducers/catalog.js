import {
  FETCH_MOVIES,
  SINGLE_MOVIE,
  FAV_MOVIE,
  UNFAV_MOVIE,
  LOADING,
} from "../types";

const initialState = {
  movieList: [],
  movie: {},
  userList: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movieList: [action.payload],
        loading: false,
      };
    case SINGLE_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case FAV_MOVIE:
      state.userList === null
        ? (state.userList = [])
        : (state.userList = [...state.userList]);

      return {
        ...state,
        userList: [...state.userList, action.payload],
        loading: false,
      };
    case UNFAV_MOVIE:
      return {
        ...state,
        userList: state.userList.filter((movie) => movie.id !== action.payload),
        loading: false,
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
