import React from "react";
import Cards from "../Cards/Cards";
import SeriesCarousel from "../CarouselBox/SeriesCarousel";

const Series = () => {
  return (
    <>
      <SeriesCarousel />
      <Cards />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <button style={{ width: "150px", height: "50px" }}>Add Series</button>
      </div>
    </>
  );
};

export default Series;
