import { Box, Card, CardActionArea, CardMedia, Paper } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { moviesContext } from "../../contexts/moviesContext";
import MoviesCards from "../Cards/MoviesCards";

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
      }}
    >
      <CarouselBox />
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
      {/* <MoviesCards /> */}
    </Box>
  );
};

export default Movies;
