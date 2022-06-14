import React from "react";
import MoviesCards from "../Cards/MoviesCards";

import CarouselBox from "../CarouselBox/CarouselBox";

// import MyApp from "../Carousel/Carousel";`

const Movies = () => {
  return (
    <>
      <CarouselBox />
      <MoviesCards />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <button style={{ width: "150px", height: "50px" }}>Add Film</button>
      </div>
    </>
  );
};

export default Movies;
