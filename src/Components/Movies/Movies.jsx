import { Container } from "@mui/material";
import React from "react";
import Cards from "../Cards/Cards";
import CarouselBox from "../CarouselBox/CarouselBox";

// import MyApp from "../Carousel/Carousel";`

const Movies = () => {
  return (
    <>
      <CarouselBox />
      <Cards />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <button style={{ width: "150px", height: "50px" }}>Add Film</button>
      </div>
    </>
  );
};

export default Movies;
