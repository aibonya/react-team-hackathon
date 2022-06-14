import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import Movies from "./Components/Movies/Movies";
import Series from "./Components/Series/Series";
import Soon from "./Components/Soon/Soon";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/soon" element={<Soon />} />
      <Route path="/series" element={<Series />} />
    </Routes>
  );
};

export default Routing;
