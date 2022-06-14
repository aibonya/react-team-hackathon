import React from "react";

import SeriesCards from "../Cards/SeriesCards";
import SeriesCarousel from "../CarouselBox/SeriesCarousel";

const Series = () => {
  return (
    <>
      <SeriesCarousel />
      <SeriesCards />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <button style={{ width: "150px", height: "50px" }}>Add Series</button>
      </div>
    </>
  );
};

export default Series;
