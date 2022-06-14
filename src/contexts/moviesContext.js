import axios from "axios";
import React, { createContext, useReducer } from "react";

export const moviesContext = createContext();
const API = "http://localhost:8000/movies";
const INIT_STATE = {
  movies: [],
  oneMovie: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: action.payload.data,
      };
    case "GET_ONE_MOVIE":
      return {
        ...state,
        oneMovie: action.payload,
      };
    default:
      return state;
  }
}

const MoviesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createMovie(newMovie) {
    await axios.post(API, newMovie);
  }

  async function getMovies() {
    let res = await axios(`${API}`);
    dispatch({
      type: "GET_MOVIES",
      payload: res,
    });
  }

  return (
    <moviesContext.Provider
      value={{
        movies: state.movies,
        oneMovie: state.oneMovie,
        createMovie,
        getMovies,
      }}
    >
      {children}
    </moviesContext.Provider>
  );
};
export default MoviesContextProvider;
