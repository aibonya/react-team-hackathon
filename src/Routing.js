import React from "react";
import { Route, Routes } from "react-router-dom";
import AddMovies from "./Components/AddMovies/AddMovies";
import AddSeries from "./Components/AddMovies/AddSeries";
import Details from "./Components/Details/Details";
import HomePage from "./Components/HomePage/HomePage";
import Movies from "./Components/Movies/Movies";
import Series from "./Components/Series/Series";
import SeriesDetails from "./Components/SeriesDetails/Details";
import Soon from "./Components/Soon/Soon";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/movies/:id" element={<Details />} />
      <Route path="/series/:id" element={<SeriesDetails />} />
      <Route path="/soon" element={<Soon />} />
      <Route path="/add-movies" element={<AddMovies />} />
      <Route path="/add-series" element={<AddSeries />} />
    </Routes>
  );
};

export default Routing;
