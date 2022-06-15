import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { moviesContext } from "../../contexts/moviesContext";
import SeriesCards from "../Cards/SeriesCards";
import SeriesCarousel from "../CarouselBox/SeriesCarousel";

const Series = () => {
  const { getSeries, series } = useContext(moviesContext);
  // console.log(series);
  useEffect(() => {
    getSeries();
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
      <SeriesCarousel />
      <Box
        margin={"16px"}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexFlow: "wrap",
        }}
      >
        {series.map((item) => (
          <SeriesCards key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default Series;
