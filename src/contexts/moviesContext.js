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

  // для отправки в db.json
  async function createMovie(newMovie) {
    await axios.post(API, newMovie);
  }
  async function createSeries(newSeries) {
    await axios.post(API2, newSeries);
  }

  // для получения
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

  // для получения одного фильма - сериала
  async function getOneMovie (id){
    let res = await axios(`${API}/${id}`)
    console.log(res);
    dispatch({
      type: 'GET_ONE_MOVIE',
      payload: res.data,
    });
  }
  async function getOneSeries (id){
    let res = await axios(`${API2}/${id}`)
    console.log(res);
    dispatch({
      type: 'GET_ONE_SERIES',
      payload: res.data,
    });
  }
  return (
    <moviesContext.Provider
      value={{
        movies: state.movies,
        oneMovie: state.oneMovie,
        series: state.series,
        oneSeries: state.oneSeries,
        getOneMovie,
        getOneSeries,
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
