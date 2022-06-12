import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import Movies from "./Components/Movies/Movies";

const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
};

export default Routing;
