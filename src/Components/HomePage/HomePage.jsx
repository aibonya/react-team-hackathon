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
      <div style={{width: '100%'}}>
        <video
        src="https://movietrailers.apple.com/movies/marvel/doctor-strange-in-the-multiverse-of-madness/doctor-strangelove-in-the-multiverse-of-madness-trailer-2_h480p.mov"
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop
          style={{borderRadius: '15px', width: '100%'}}
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
