import React from "react";
import { Route, Routes } from "react-router-dom";
import AddMovies from "./Components/AddMovies/AddMovies";
import AddSeries from "./Components/AddMovies/AddSeries";
import Details from "./Components/Details/Details";
import EditMovies from "./Components/Edit/EditMovies";
import EditSeries from "./Components/Edit/EditSeries";
import HomePage from "./Components/HomePage/HomePage";
import LoginForm from "./Components/LoginForm/LoginForm";
import Movies from "./Components/Movies/Movies";
import Series from "./Components/Series/Series";
import SeriesDetails from "./Components/SeriesDetails/SeriesDetails";
import SignUp from "./Components/SignUp/SignUp";
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
      <Route path="/log-in" element={<LoginForm />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/add-movies" element={<AddMovies />} />
      <Route path="/add-series" element={<AddSeries />} />
      <Route path="/edit-movies/:id" element={<EditMovies />} />
      <Route path="/edit-series/:id" element={<EditSeries />} />
    </Routes>
  );
};

export default Routing;
