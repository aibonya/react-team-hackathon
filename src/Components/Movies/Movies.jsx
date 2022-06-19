import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { moviesContext } from "../../contexts/moviesContext";
import MoviesCards from "../Cards/MoviesCards";
import SeriesCards from "../Cards/SeriesCards";

import CarouselBox from "../CarouselBox/CarouselBox";

const Movies = () => {
  const { getMovies, movies } = useContext(moviesContext);
  // console.log(movies);
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        flexFlow: "wrap",
        marginTop: '90px'
      }}
    >
      <CarouselBox/>
      <Box
        margin={"16px"}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexFlow: "wrap",
        }}
      >
        {movies.map((item) => (
          <MoviesCards key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default Movies;
