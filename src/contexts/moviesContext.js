import axios from "axios";
import React, { createContext, useReducer } from "react";

export const moviesContext = createContext();
const API = "http://localhost:8001/movies";
const API2 = "http://localhost:8001/series";
const INIT_STATE = {
  movies: [],
  series: [],
  oneMovie: null,
  oneSeries: null,
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
    case "GET_SERIES":
      return {
        ...state,
        series: action.payload.data,
      };
    case "GET_ONE_SERIES":
      return {
        ...state,
        oneSeries: action.payload,
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
  async function createSeries(newSeries) {
    await axios.post(API2, newSeries);
  }

  async function getMovies() {
    let res = await axios(`${API}`);
    dispatch({
      type: "GET_MOVIES",
      payload: res,
    });
  }
  async function getSeries() {
    let res = await axios(`${API2}`);
    dispatch({
      type: "GET_SERIES",
      payload: res,
    });
  }

  return (
    <moviesContext.Provider
      value={{
        movies: state.movies,
        oneMovie: state.oneMovie,
        series: state.series,
        oneSeries: state.oneSeries,
        createMovie,
        createSeries,
        getMovies,
        getSeries,
      }}
    >
      {children}
    </moviesContext.Provider>
  );
};
export default MoviesContextProvider;
