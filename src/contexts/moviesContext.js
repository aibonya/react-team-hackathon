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
  moviesPages: 0,
  seriesPages: 0
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: action.payload.data,
        moviesPages: Math.ceil(action.payload.headers["x-total-count"] / 3)
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
        seriesPages: Math.ceil(action.payload.headers["x-total-count"] / 3)
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
    let res = await axios(`${API}${window.location.search}`);
    dispatch({
      type: "GET_MOVIES",
      payload: res,
    });
  }
  async function getSeries() {
    let res = await axios(`${API2}${window.location.search}`);
    dispatch({
      type: "GET_SERIES",
      payload: res,
    });
  }

  // для получения одного фильма - сериала
  async function getOneMovie (id){
    let res = await axios(`${API}/${id}`)
    // console.log(res);
    dispatch({
      type: 'GET_ONE_MOVIE',
      payload: res.data,
    });
  }
  async function getOneSeries (id){
    let res = await axios(`${API2}/${id}`)
    // console.log(res);
    dispatch({
      type: 'GET_ONE_SERIES',
      payload: res.data,
    });
  }

  //  для удаления
  async function deleteMovie (id){
    await axios.delete(`${API}/${id}`)
    getMovies()
  }
  async function deleteSeries (id){
    await axios.delete(`${API2}/${id}`)
    getSeries()
  }

  // для редактирования
  async function updateMovie (id, editedMovie){
    await axios.patch(`${API}/${id}`, editedMovie);
  }
  async function updateSeries (id, editedSeries){
    await axios.patch(`${API2}/${id}`, editedSeries);
  }

  return (
    <moviesContext.Provider
      value={{
        movies: state.movies,
        oneMovie: state.oneMovie,
        series: state.series,
        oneSeries: state.oneSeries,
        moviesPages: state.moviesPages,
        seriesPages: state.seriesPages,
        updateMovie,
        updateSeries,
        deleteSeries,
        deleteMovie,
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
