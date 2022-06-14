import React from "react";
import { Route, Routes } from "react-router-dom";
import AddFilm from "./Components/AddFilm/AddFilm";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" />
      <Route path="/register" />
      <Route path="cart" />
      <Route path="add-film" element={<AddFilm />}/>
      <Route path="/home" />
      <Route path="/movies" />
      <Route path="/series" />
      <Route path="/soon" />
    </Routes>
  );
};

export default Routing;
