import React from "react";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center" , marginTop: '120px'} }>
      <h1>Тут будет HomePage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        aspernatur, animi iste in deserunt atque voluptas voluptatibus similique
        harum, sequi quis.
      </p>
      <div>
    
        <video
          src="https://movietrailers.apple.com/movies/independent/the-lost-girls/the-lost-girls-trailer-1_h480p.mov"
          controls
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop
        > something</video></div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
        quibusdam pariatur maxime saepe porro recusandae repudiandae voluptas
        corrupti nisi, veritatis, accusantium modi ab officia iusto.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
        repudiandae incidunt laborum rem, sit at repellendus fuga numquam vel
        unde ipsum id excepturi veritatis accusamus
      </p>
    </div>
  );
};

export default HomePage;
